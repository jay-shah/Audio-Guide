import React, {Component} from 'react';

import {StyleSheet, Text, TouchableOpacity, View, ScrollView, Alert} from 'react-native';
import Sound from 'react-native-sound';
import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 30,
    padding: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(240,240,240,1)',
  },
  button: {
    fontSize: 10,
    backgroundColor: 'rgba(220,220,220,1)',
    borderRadius: 4,
    borderWidth: 3,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'scroll',
    padding: 7,
  },
  header: {
    textAlign: 'left',
  },
  feature: {
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgb(180,180,180)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(230,230,230)',
  },
});

const Button = ({title, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.button}>{title}</Text>
  </TouchableOpacity>
);

const Header = ({children, style}) => <Text style={[styles.header, style]}>{children}</Text>;

const Feature = ({title, onPress, description, buttonLabel = 'PLAY'}) => (
  <View style={styles.feature}>
    <Header style={{flex: 1}}>{title}</Header>
    <Button title={buttonLabel} onPress={onPress} />
  </View>
);

const resultIcons = {
  '': '',
  pending: '?',
  playing: '\u25B6',
  win: '\u2713',
  fail: '\u274C',
};

const audioTests = [
  {
    title: 'mp3 in bundle',
    url: 'welcome.mp3',
    basePath: Sound.MAIN_BUNDLE,
    onPrepared: (sound, component) => {
      component.setState({playing: sound});
    },
  },
  {
    title: 'mp3 remote download',
    url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
  },
  {
    title: 'mp3 remote - file doesn\'t exist',
    url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/file-not-here.mp3',
  },

];

/**
 * Generic play function for majority of tests
 */
function playSound(testInfo, component) {

  const callback = (error, sound) => {
    if (error) {
      Alert.alert('error', error.message);
      return;
    }
    // Run optional pre-play callback
    testInfo.onPrepared && testInfo.onPrepared(sound, component);
    sound.play(() => {
      console.log("GOT HERE" + testInfo);
      // Success counts as getting to the end
      // Release when it's done so we're not using up resources
      sound.release();
      component.setState({playing: null});

    });
  };

  const sound = new Sound(testInfo.url, testInfo.basePath, error => callback(error, sound));



}





class AudioList extends Component {
  constructor(props) {
    super(props);

    Sound.setCategory('Playback', true); // true = mixWithOthers

    // Special case for stopping

    this.state = {
      playing: undefined
    };
}

 stopSound = () => {
  if (!this.state.playing) {
    return;
  }

  this.state.playing.stop().release();
  this.setState({playing: null});

};


  render() {

    if (this.state.playing) {
        return (
          <View style={styles.container}>
            <Header style={styles.title}>react-native-sound-demo</Header>
            <Text> YOU MAdE IT </Text>
            <Feature title="mp3 in bundle " buttonLabel={'STOP'} onPress={this.stopSound} />
          </View>
        );
      }

    else {
      return (
        <View style={styles.container}>
          <Header style={styles.title}>react-native-sound-demo</Header>
          <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
            {audioTests.map(testInfo => {
              return (
                <Feature
                  key={testInfo.title}
                  title={testInfo.title}
                  onPress={() => {
                    return playSound(testInfo, this);
                  }}
                />
              );
            })}

          </ScrollView>
        </View>
      );
    }
  }
}

export default AudioList;
