import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
  Image,
  Alert,
  Button
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { StackNavigator } from 'react-navigation';
import Sound from 'react-native-sound';
import PlayOrPause from './playOrPause';
import Slider from 'react-native-slider'



export default class AudioPlay extends Component {

  constructor(props) {
    super(props)

    Sound.setCategory('Playback', true);

    let url = this.props.navigation.state.params.url
    let whoosh = new Sound(url, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      let durationSeconds = ~~(this.state.whoosh.getDuration())
      var mins = ~~((durationSeconds % 3600) / 60);
      var secs = durationSeconds % 60;
      let duration = mins + ":" + (secs < 10 ? "0" : "") + parseInt(secs);

      this.setState({
        duration: duration,
        durationSeconds: durationSeconds
      })
      // loaded successfully
      console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
    });

    this.state = {
      whoosh: whoosh,
      playing: false,
      currentTime: '0:00',
      duration: '0:00',
      durationSeconds: 1000,
      sliding: false,
      value: 0
    }



  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Position: ' + navigation.state.params.number,
    headerRight: (<View></View>),
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1
    }
  });



  componentWillUnmount() {

    if (this.state.whoosh) {
      this.state.whoosh.stop().release();
    }
  }

  nextButton = () => {
    this.props.navigation.goBack();
    this.props.navigation.state.params.nextButton()

  }

  previousButton = () => {
    this.props.navigation.goBack();
    this.props.navigation.state.params.previousButton()

  }


  tick = () => {

    if (!this.state.sliding) {

      this.state.whoosh.getCurrentTime((currentTime) => {

        var mins = ~~((currentTime % 3600) / 60);
        var secs = currentTime % 60;

        let time = mins + ":" + (secs < 10 ? "0" : "") + Math.ceil(secs);
        let value = currentTime / this.state.durationSeconds

        if (this.tickInterval) {
          this.setState({
            currentTime: time,
            value: value
          });
        }
      });
    }
  }



  handleAudio = () => {

    if (this.state.whoosh && !this.state.playing) {

      console.log(this.state.whoosh.getDuration())


      this.tickInterval = setInterval(() => { this.tick(); }, 500);

      this.state.whoosh.play((success) => {

        if (success) {
          console.log('successfully finished playing');
          if (this.tickInterval) {
            clearInterval(this.tickInterval);
            this.tickInterval = null;
          }
        } else {
          if (this.tickInterval) {
            clearInterval(this.tickInterval);
            this.tickInterval = null;
          }
          console.log('playback failed due to audio decoding errors');
          this.state.whoosh.release();
        }

        this.setState({
          playing: false
        })
      });


      this.setState({
        playing: true
      })
    }

    else if (this.state.playing) {
      console.log(this.props.navigation.state.params.handleCheck);
      this.state.whoosh.pause();
      this.setState({
        playing: false
      })
    }
  }

  handleValueChange = (value) => {

    let setTime = ~~(value * this.state.durationSeconds)
    this.state.whoosh.setCurrentTime(setTime)


    this.setState({
      value: value
    })
  }

  render() {

    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    let url = this.props.navigation.state.params.url
    let title = this.props.navigation.state.params.title
    let image = this.props.navigation.state.params.image
    let zone = this.props.navigation.state.params.zone

    return (

      <View style={styles.container}>
        <View style={styles.imageContainer}>

          <Image source={image} resizeMode={'cover'} style={styles.imageContainer} blurRadius={20} opacity={0.8}>
            <LinearGradient style={styles.linearGradient} colors={["transparent", "white"]} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }}>

              <Image source={image} resizeMode={'cover'} borderRadius={15} style={styles.imageStyle}></Image>
            </LinearGradient>
          </Image>


        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>

          <Text style={styles.zoneText}>{zone}</Text>
        </View>


        <View style={{
          flex: 0.5,
          marginLeft: 30,
          marginRight: 30,
          alignItems: "stretch",
          justifyContent: "center"
        }}>

          <View style={{ marginBottom: 20, flexDirection: 'row' }} >

            <Text style={{ position: 'absolute', left: 0 }} >
              {this.state.currentTime}
            </Text>

            <Text style={{ position: 'absolute', right: 0 }}>
              {this.state.duration}
            </Text>

          </View>

          <Slider
            trackStyle={customStyles3.track}
            thumbStyle={customStyles3.thumb}
            onSlidingStart={() => this.setState({ sliding: true })}
            onSlidingComplete={() => this.setState({ sliding: false })}
            minimumTrackTintColor='#eecba8'
            thumbTouchSize={{ width: 20, height: 60 }}
            value={this.state.value}
            onValueChange={this.handleValueChange} />

        </View>
        <View style={{
          flex: 2,
          flexWrap: 'wrap',
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <TouchableOpacity onPress={this.previousButton} >
            <Image style={styles.previousStyle} source={require('./img/previous.png')}>
            </Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleAudio}>
            <PlayOrPause playing={this.state.playing} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.nextButton} >
            <Image style={styles.previousStyle} source={require('./img/next.png')}>
            </Image>
          </TouchableOpacity>
        </View>
        {/* </View> */}


      </View >

    );

  }
}

var customStyles3 = StyleSheet.create({
  track: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#d0d0d0',
  },
  thumb: {
    width: 10,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#eb6e1b',
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  previousStyle: {
    margin: 10,
    width: Dimensions.get('window').width / 6,
    height: Dimensions.get('window').width / 6
  },
  imageContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  imageStyle: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').width / 1.5 - 20
  },
  titleContainer: {
    marginRight: 30,
    marginLeft: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  zoneText: {
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
    fontWeight: 'normal'
  },
  linearGradient: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center'
  }

});
