import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
  Image,
  Dimensions,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import AudioList from './audioList'

export default class Zone extends Component {

  constructor(props) {
    super(props)
  }

  nextZone = (zone) => {
    const { navigate } = this.props.navigation;
    let sendZone = ''
    let zoneTitle = ''

    if (zone != 'Zone 4') {

      switch (zone) {
        case 'Zone 1':
          sendZone = 'two';
          zoneTitle = 'Zone 2';
          break;

        case 'Zone 2':
          sendZone = 'three';
          zoneTitle = 'Zone 3';
          break;

        case 'Zone 3':
          sendZone = 'four';
          zoneTitle = 'Zone 4';
          break;
      }

      navigate('AudioList', {
        sendZone: sendZone,
        zoneTitle: zoneTitle,
        nextZone: this.nextZone
      });

    }

  }





  TouchZoneImages = (zone, title, picture) => {
    return (<TouchableOpacity style={styles.touachableImage} onPress={() => this.onPresButton(zone, title)}>
      <Image style={styles.smallImages} borderRadius={15} resizeMode={'cover'} source={picture}>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>{title}
          </Text>
        </View>
      </Image>
    </TouchableOpacity>)
  };

  onPresButton = (zone, title) => {
    const { navigate } = this.props.navigation;
    navigate('AudioList', {
      sendZone: zone,
      zoneTitle: title,
      nextZone: this.nextZone
    });

  }

  static navigationOptions = {
    header: null
  };

  render() {

    return (<View style={styles.container}>

      <View style={styles.title}>

        <Image style={{ flex: 1, margin: 10 }} resizeMode={'contain'} source={require('./img/titleLeft.png')}></Image>

        <Image style={{ flex: 5, margin: 10 }} resizeMode={'contain'} source={require('./img/titleRight.png')}></Image>

      </View>
      <Image style={styles.mainImage}
        borderRadius={15}
        width={Dimensions.get('window').width - 40}
        resizeMode={'cover'}
        source={require('./img/mandir.jpg')} />
      <View style={styles.smallImageContainer}>
        <View style={styles.smallImageRow}>
          {this.TouchZoneImages('one', 'Zone 1', require('./img/Haveli_Atrium.jpg'))}
          {this.TouchZoneImages('two', 'Zone 2', require('./img/Walkway.jpg'))}
        </View>
        <View style={styles.smallImageRow}>
          {this.TouchZoneImages('three', 'Zone 3', require('./img/Upper_Sanctum.jpg'))}
          {this.TouchZoneImages('four', 'Zone 4', require('./img/Thank_You_&_Farewell.jpg'))}
        </View>

      </View>
    </View>)

  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'black',
    margin: 10,
    // borderRadius
  },
  titleContainer: {
    // flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'black'
  },
  titleBoxLeft: {
    flex: 1,

    margin: 10,

    // backgroundColor: 'blue'
  },
  titleBoxRight: {
    flex: 4,
    margin: 10
  },
  mainImage: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  smallImageContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  smallImageRow: {
    flex: 1,
    flexDirection: 'row'
  },
  touachableImage: {
    flex: 1,
    width: Dimensions.get('window').width / 2 - 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  smallImages: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 2 - 30,
    height: Dimensions.get('window').height / 4 - 40
  },
  textContainer: {
    flex: 1,
    width: Dimensions.get('window').width / 2 - 30,
    height: Dimensions.get('window').height / 4 - 40,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
});
