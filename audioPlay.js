import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
  Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Sound from 'react-native-sound';
import PlayOrPause from './playOrPause';




function playSound(url, component) {

  const callback = (error, sound) => {
    if (error) {
      Alert.alert('error', error.message);
      return;
    }
    // Run optional pre-play callback


      component.setState({playing: sound});


    sound.play(() => {
      // console.log("GOT HERE" + testInfo);rr
      // Success counts as getting to the end
      // Release when it's done so we're not using up resources
      sound.release();
      component.setState({playing: null});

    });
  };

  const sound = new Sound(url, Sound.MAIN_BUNDLE, error => callback(error, sound));


}

export default class AudioPlay extends Component {

  constructor(props) {
    super(props)

    Sound.setCategory('Playback', true);

    this.state = {
      playing: undefined,
      isPlaying: true
    }

  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.number,
    headerRight: (
      <View></View>
    ),
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center'
    }
  });

  componentWillUnmount() {

    if (!this.state.playing) {
      return;
    }

    this.state.playing.stop().release();
    this.setState({playing: null});
  }



  togglePlay = () => {

    this.setState ({
      isPlaying: !this.state.isPlaying
    });
  }

  stopPlaying = () => {

    if (!this.state.playing) {
      return;
    }

    this.state.playing.stop().release();
    this.setState({playing: null});
  }

  render() {

    const {navigate} = this.props.navigation;
    let url = this.props.navigation.state.params.url
    console.log(url)


    return (

      <View style={{
        flex: 1,
        flexDirection: 'column'
      }}>
        <View style={{
          flex: 3,
          backgroundColor: 'powderblue',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text>IMAGE</Text>
        </View>
        <View style={{
          flex: 1,
          backgroundColor: 'skyblue',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text>Title</Text>
        </View>
        <View style={{
          flex: 1,
          backgroundColor: 'skyblue',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text>Zone</Text>
        </View>
        <View style={{
          flex: 2
        }}>

          <TouchableOpacity style={{
            height: 100,
            width: 100,
            backgroundColor: 'orange'
          }} onPress={() => {
            return playSound(url, this);
          }}>

            <PlayOrPause isPlaying={this.state.isPlaying} />

          </TouchableOpacity>
          <TouchableOpacity style={{
            height: 100,
            width: 100,
            backgroundColor: 'orange'
          }} onPress={this.stopPlaying}>

            <Text> STOP </Text>

          </TouchableOpacity>

        </View>
      </View>

    );

  }
}
