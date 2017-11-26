import React, {Component} from 'react';
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
import {StackNavigator} from 'react-navigation';
import AudioList from './audioList'

export default class Zone extends Component {

  constructor(props) {
    super(props)

  }

  BigImage = () => <Image style={styles.mainImage} borderRadius={10} width={Dimensions.get('window').width - 40} resizeMode={'cover'} source={require('./img/mandir.jpg')}/>;

  TouchZoneImages = ({zone, title, picture}) => (<TouchableOpacity style={styles.touachableImage} onPress={() => this.onPresButton(zone, title)}>
    <Image style={styles.smallImages} borderRadius={15} resizeMode={'cover'} source={picture}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{title}
        </Text>
      </View>
    </Image>
  </TouchableOpacity>);

  onPresButton = (zone, title) => {
    const {navigate} = this.props.navigation;
    navigate('AudioList', {
      sendZone: zone,
      zoneTitle: title
    });

  }

  static navigationOptions = {
    header: null
  };

  render() {

    return (<View style={styles.container}>

      <View style={styles.title}>
        <Text>TITLE</Text>
      </View>
      <this.BigImage/>
      <View style={styles.smallImageContainer}>
        <View style={styles.smallImageRow}>
          <this.TouchZoneImages zone={'one'} title={"Zone 1"} picture={require('./img/Haveli_Atrium.jpg')}/>
          <this.TouchZoneImages zone={'two'} title={"Zone 2"} picture={require('./img/Walkway.jpg')}/>
        </View>
        <View style={styles.smallImageRow}>
          <this.TouchZoneImages zone={'three'} title={"Zone 3"} picture={require('./img/Upper_Sanctum.jpg')}/>
          <this.TouchZoneImages zone={'four'} title={"Zone 4"} picture={require('./img/Thank_You_&_Farewell.jpg')}/>
        </View>

      </View>
    </View>)

  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 10
  },
  title: {
    flex: 1,
    backgroundColor: 'powderblue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    // borderRadius
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
