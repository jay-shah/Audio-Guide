import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Zone from './zone';
import AudioList from './audioList'


const NavigationLayout = StackNavigator({
  Zone: { screen: Zone, nagivationOptions: { header: null} },
  AudioList: {screen: AudioList, nagivationOptions: { header: null} }
});



export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Try again</Text>
      //
      // </View>

    
      <NavigationLayout />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});