import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
  Button,
  Dimensions,
  Image
} from 'react-native';
import Sound from 'react-native-sound';
import {StackNavigator} from 'react-navigation';

const windowWidth = ((Dimensions.get('window').width) / 2) - 30;

const zoneOne = [
  {
    title: 'Welcome to BAPS Shri Swaminarayan Mandir',
    url: 'welcome.mp3',
    image: require('./img/Welcome_to_BAPS_Shri_Swaminarayan_Mandir.jpg')
  }, {
    title: 'Haveli Atrium',
    url: 'haveli_atrium.mp3',
    image: require('./img/Haveli_Atrium.jpg')
  }, {
    title: 'Assembly Hall',
    image: require('./img/Assembly_Hall.jpg')
  }, {
    title: "Swamishri's Portrait",
    image: require('./img/Swamishris_Portrait.jpg')
  }
];

const zoneTwo = [
  {
    title: 'Walkway',
    image: require('./img/Walkway.jpg')
  }, {
    title: 'Photo Display - Interfaith',
    image: require('./img/Photo_Display_Interfaith.jpg')
  }, {
    title: 'Photo Display  - Charity Activities',
    image: require('./img/Photo_Display_Charity_Activities.jpg')
  }
];

const zoneThree = [
  {
    title: 'Abhishek Mandap',
    image: require('./img/Abhishek_Mandap.jpg')
  }, {
    title: 'Upper Sanctum',
    image: require('./img/Upper_Sanctum.jpg')
    // image: require('./img/Devotion_Worship.jpg')
  }, {
    title: 'Bhagwan Swaminarayan',
    image: require('./img/Bhagwan_Swaminarayan.jpg')
  }, {
    title: 'Gunatitanand Swami',
    image: require('./img/Gunatitanand_Swami.jpg')
  }, {
    title: 'Gopalanand Swami',
    image: require('./img/Gopalanand_Swami.jpg')
  }, {
    title: 'Sukh Shayya',
    image: require('./img/Sukh_Shayya.jpg')
  }, {
    title: 'Ghanshyam Maharaj',
    image: require('./img/Ghanshyam_Maharaj.jpg')
  }, {
    title: 'Guru Parampara',
    image: require('./img/Guru_Parampara.jpg')
  }, {
    title: 'Harikrishna Maharaj & Radha-Krishna',
    image: require('./img/Harikrishna_Maharaj_&_Radha_Krishna.jpg')
  }, {
    title: 'Bhagatji Maharaj',
    image: require('./img/Bhagatji_Maharaj.jpg')
  }, {
    title: 'Shastriji Maharaj',
    image: require('./img/Shastriji_Maharaj.jpg')
  }, {
    title: 'Yogiji Maharaj',
    image: require('./img/Yogiji_Maharaj.jpg')
  }, {
    title: 'Pramukh Swami Maharaj',
    image: require('./img/Pramukh_Swami_Maharaj.jpg')
  }, {
    title: 'Shiva-Parvati',
    image: require('./img/Shiva_Parvati.jpg')
  }, {
    title: 'Sita-Rama',
    image: require('./img/Sita_Rama.jpg')
  }, {
    title: 'Ganesh & Shivaling',
    image: require('./img/Ganesh_&_Shivaling.jpg')
  }, {
    title: 'Hanuman',
    image: require('./img/Hanuman.jpg')
  }, {
    title: 'Carved Pillars',
    image: require('./img/Carved_Pillars.jpg')
  }, {
    title: 'Central Dome',
    image: require('./img/Central_Dome.jpg')
  }, {
    title: 'Carved Ceiling',
    image: require('./img/Carved_Ceiling.jpg')
  }, {
    title: 'Shiva-Parvati',
    image: require('./img/Shiva_Parvati.jpg')
  }, {
    title: 'Devotion & Worship',
    image: require('./img/Devotion_&_Worship.jpg')
  }, {
    title: 'Rosewood Doors',
    image: require('./img/Rosewood_Doors.jpg')
  }, {
    title: 'Porch',
    image: require('./img/Porch.jpg')
  }
];

const zoneFour = [
  {
    title: 'Exhibition',
    image: require('./img/Exhibition.jpg')
  }, {
    title: 'Thank You & Farewell',
    image: require('./img/Thank_You_&_Farewell.jpg')
  }
];

export default class AudioList extends Component {

  constructor(props) {
    super(props)

  }

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.zoneTitle,
    headerRight: (<View></View>),
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center'
    }
  });

  // static navigationOptions = { header: null};

  render() {

    const {navigate} = this.props.navigation;
    var test = [];

    function getZoneMap(thisZone) {
      for (let i = 0; i < thisZone.length; i++) {

        test.push(<TouchableOpacity key={thisZone[i]} style={styles.touchableImage} onPress={() => navigate('AudioPlay', {
            url: thisZone[i].url,
            number: i
          })}>

          <Image source={thisZone[i].image} resizeMode={'cover'} borderRadius={10} style={styles.imageStyle}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyles}>{thisZone[i].title}</Text>
            </View>
          </Image>
        </TouchableOpacity>)
      }
    }

    let zone = this.props.navigation.state.params.sendZone

    if (zone == 'one') {
      getZoneMap(zoneOne)
    }
    if (zone == 'two') {
      getZoneMap(zoneTwo)
    }

    if (zone == 'three') {
      getZoneMap(zoneThree)
    }
    if (zone == 'four') {
      getZoneMap(zoneFour)
    }

    return (<ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {test}
      </View>
    </ScrollView>);
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10
  },
  imageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
    height: windowWidth
  },
  touchableImage: {
      width: windowWidth,
      height: windowWidth,
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textContainer: {
        width: windowWidth,
        height: windowWidth,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
      },
      textStyles: {
          textAlign: 'center',
          fontSize: 15,
          color: 'white',
          fontWeight: 'bold'
        }
});
