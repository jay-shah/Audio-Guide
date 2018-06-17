import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Zone from './zone';
import AudioList from './audioList';
import AudioPlay from './audioPlay';

const NavigationLayout = StackNavigator({
  Zone: { screen: Zone, nagivationOptions: { header: null } },
  AudioList: { screen: AudioList },
  AudioPlay: { screen: AudioPlay }
});

export default class App extends React.Component {
  render() {
    return (<NavigationLayout />);
  }
}

