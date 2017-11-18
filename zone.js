import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ScrollView, Alert, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import AudioList from './audioList'



export default class Zone extends Component {

  constructor(props){
    super(props)


  }

  static navigationOptions = { header: null};

  render() {

    const {navigate} = this.props.navigation;

    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1, backgroundColor: 'powderblue', justifyContent: 'center', alignItems: 'center'}}>
          <Text>TITLE</Text>
        </View>
        <View style={{flex: 2, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center'}}>
          <Text onPress={() => navigate('AudioList')}>IMAGE</Text>
        </View>
        <View style={{flex: 3}}>

          <View style={{flex: 1,  flexDirection: 'row'}}>

            <TouchableOpacity style={{flex: 1,  backgroundColor: 'powderblue',borderColor: 'navy', borderWidth: 3,  justifyContent: 'center', alignItems: 'center' }} >
              <Text>Zone 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1,  backgroundColor: 'powderblue',borderColor: 'navy', borderWidth: 3,  justifyContent: 'center', alignItems: 'center' }}>
              <Text>Zone 2</Text>
            </TouchableOpacity>
          </View>
            <View style={{flex: 1,  flexDirection: 'row'}} >
              <TouchableOpacity style={{flex: 1,  backgroundColor: 'powderblue',borderColor: 'navy', borderWidth: 3,  justifyContent: 'center', alignItems: 'center' }} >
                <Text>Zone 3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 1,  backgroundColor: 'powderblue',borderColor: 'navy', borderWidth: 3,  justifyContent: 'center', alignItems: 'center' }} >
                <Text>Zone 4</Text>
              </TouchableOpacity>
          </View>

        </View>
      </View>
    )

  }

  _handlePress() {
    console.log("YES")
  }
}
