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
      // loaded successfully
      console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
    });

    this.state = {
      whoosh: whoosh,
      playing: false
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.number,

    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center'
    }
  });


  componentWillUnmount() {

    if (this.state.whoosh) {
      this.state.whoosh.stop().release();
    }
  }

  handlePause = () => {
    console.log('got here')
    this.state.whoosh.pause()
  }

  handleAudio = () => {

    if (this.state.whoosh && !this.state.playing) {
      console.log(this.state.playing)

      this.state.whoosh.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
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
      this.state.whoosh.pause();
      this.setState({
        playing: false
      })
    }
  }

  render() {

    const { navigate } = this.props.navigation;
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
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.zoneText}>{zone}</Text>
        </View>
        <View style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
        }}>

          <TouchableOpacity onPress={this.handleAudio}>
            <PlayOrPause playing={this.state.playing} />
          </TouchableOpacity>


        </View>
      </View>

    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
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
    flex: 0.3,
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
