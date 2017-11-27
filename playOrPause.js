import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
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



    if(!this.props.isPlaying){
    return (
      <Image style={styles.imageStyle} source={require('./img/play.png')}>
    </Image>);}

else{
  return (
    <Image style={styles.imageStyle} source={require('./img/pause.png')}>
  </Image>);
  }

}
}

const styles = StyleSheet.create({
  imageStyle: {
    width: Dimensions.get('window').width / 4 ,
    height: Dimensions.get('window').width / 4
  }
});
