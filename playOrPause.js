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

export default class PlayOrPause extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {



    if(this.props.isPlaying){
    return (
      <Text>
      Pause
    </Text>);}

else{
  return (
    <Text>
    Play
  </Text>);
  }

}
}
