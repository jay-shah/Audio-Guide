import React, { Component } from 'react';
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
import { StackNavigator } from 'react-navigation';

const windowWidth = ((Dimensions.get('window').width) / 2) - 30;

const zoneOne = [
  {
    title: 'Welcome to BAPS Shri Swaminarayan Mandir',
    url: 'welcome.mp3',
    image: require('./img/Welcome_to_BAPS_Shri_Swaminarayan_Mandir.jpg'),
    number: '1'
  }, {
    title: 'Haveli Atrium',
    url: 'haveli_atrium.mp3',
    image: require('./img/Haveli_Atrium.jpg'),
    number: '2'
  }, {
    title: 'Assembly Hall',
    url: 'assembly_hall.mp3',
    image: require('./img/Assembly_Hall.jpg'),
    number: '3'
  }, {
    title: "Swamishri's Portrait",
    url: 'swamishris_portrait.mp3',
    image: require('./img/Swamishris_Portrait.jpg'),
    number: '4'
  }
];

const zoneTwo = [
  {
    title: 'Walkway',
    url: 'walkway.mp3',
    image: require('./img/Walkway.jpg'),
    number: '5'
  }, {
    title: 'Photo Display - Interfaith',
    url: 'photo_display_interfaith.mp3',
    image: require('./img/Photo_Display_Interfaith.jpg'),
    number: '6'
  }, {
    title: 'Photo Display  - Charity Activities',
    url: 'photo_display_charity_activities.mp3',
    image: require('./img/Photo_Display_Charity_Activities.jpg'),
    number: '7'
  }
];

const zoneThree = [
  {
    title: 'Abhishek Mandap',
    url: 'abhishek_mandap.mp3',
    image: require('./img/Abhishek_Mandap.jpg'),
    number: '8'
  }, {
    title: 'Upper Sanctum',
    url: 'upper_sanctum.mp3',
    image: require('./img/Upper_Sanctum.jpg'),
    number: '9'
  }, {
    title: 'Bhagwan Swaminarayan',
    url: 'bhagwan_swaminarayan.mp3',
    image: require('./img/Bhagwan_Swaminarayan.jpg'),
    number: '10'
  }, {
    title: 'Gunatitanand Swami',
    url: 'gunatitanand_swami.mp3',
    image: require('./img/Gunatitanand_Swami.jpg'),
    number: '11'
  }, {
    title: 'Gopalanand Swami',
    url: 'gopalanand_swami.mp3',
    image: require('./img/Gopalanand_Swami.jpg'),
    number: '12'
  }, {
    title: 'Sukh Shayya',
    url: 'sukh_shayya.mp3',
    image: require('./img/Sukh_Shayya.jpg'),
    number: '13'
  }, {
    title: 'Ghanshyam Maharaj',
    url: 'ghanshyam_maharaj.mp3',
    image: require('./img/Ghanshyam_Maharaj.jpg'),
    number: '14'
  }, {
    title: 'Guru Parampara',
    url: 'guru_parampara.mp3',
    image: require('./img/Guru_Parampara.jpg'),
    number: '15'
  }, {
    title: 'Harikrishna Maharaj & Radha-Krishna',
    url: 'harikrishna_maharaj_radha_krishna.mp3',
    image: require('./img/Harikrishna_Maharaj_&_Radha_Krishna.jpg'),
    number: '16'
  }, {
    title: 'Bhagatji Maharaj',
    url: 'bhagatji_maharaj.mp3',
    image: require('./img/Bhagatji_Maharaj.jpg'),
    number: '17'
  }, {
    title: 'Shastriji Maharaj',
    url: 'shastriji_maharaj.mp3',
    image: require('./img/Shastriji_Maharaj.jpg'),
    number: '18'
  }, {
    title: 'Yogiji Maharaj',
    url: 'yogiji_maharaj.mp3',
    image: require('./img/Yogiji_Maharaj.jpg'),
    number: '19'
  }, {
    title: 'Pramukh Swami Maharaj',
    url: 'pramukh_swami_maharaj.mp3',
    image: require('./img/Pramukh_Swami_Maharaj.jpg'),
    number: '20'
  }, {
    title: 'Shiva-Parvati',
    url: 'shiva_parvati.mp3',
    image: require('./img/Shiva_Parvati.jpg'),
    number: '21'
  }, {
    title: 'Sita-Rama',
    url: 'sita_rama.mp3',
    image: require('./img/Sita_Rama.jpg'),
    number: '22'
  }, {
    title: 'Ganesh & Shivaling',
    url: 'ganesh_shivaling.mp3',
    image: require('./img/Ganesh_&_Shivaling.jpg'),
    number: '23'
  }, {
    title: 'Hanuman',
    url: 'hanuman.mp3',
    image: require('./img/Hanuman.jpg'),
    number: '24'
  }, {
    title: 'Carved Pillars',
    url: 'carved_pillars.mp3',
    image: require('./img/Carved_Pillars.jpg'),
    number: '25'
  }, {
    title: 'Central Dome',
    url: 'central_dome.mp3',
    image: require('./img/Central_Dome.jpg'),
    number: '26',
  }, {
    title: 'Carved Ceiling',
    url: 'carved_ceiling.mp3',
    image: require('./img/Carved_Ceiling.jpg'),
    number: '27'
  }, {
    title: 'Shiva-Parvati',
    url: 'shiva_parvati.mp3',
    image: require('./img/Shiva_Parvati.jpg'),
    number: '28'
  }, {
    title: 'Devotion & Worship',
    url: 'devotion_worship.mp3',
    image: require('./img/Devotion_&_Worship.jpg'),
    number: '29'
  }, {
    title: 'Rosewood Doors',
    url: 'rosewood_doors.mp3',
    image: require('./img/Rosewood_Doors.jpg'),
    number: '30'
  }, {
    title: 'Porch',
    url: 'porch.mp3',
    image: require('./img/Porch.jpg'),
    number: '31'
  }
];

const zoneFour = [
  {
    title: 'Exhibition',
    url: 'exhibition.mp3',
    image: require('./img/Exhibition.jpg'),
    number: '32'
  }, {
    title: 'Thank You & Farewell',
    url: 'thank_you_farewell.mp3',
    image: require('./img/Thank_You_&_Farewell.jpg'),
    number: '33'
  }
];

export default class AudioList extends Component {

  constructor(props) {
    super(props)

  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.zoneTitle,
    headerRight: (<View></View>),
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center'
    }
  });

  // static navigationOptions = { header: null};

  render() {

    const { navigate } = this.props.navigation;
    var test = [];

    function getZoneMap(thisZone, zone) {
      for (let i = 0; i < thisZone.length; i++) {

        test.push(<TouchableOpacity key={thisZone[i]} style={styles.touchableImage} onPress={() => navigate('AudioPlay', {
          title: thisZone[i].title,
          url: thisZone[i].url,
          image: thisZone[i].image,
          number: thisZone[i].number,
          zone: zone
        })}>

          <Image source={thisZone[i].image} resizeMode={'cover'} borderRadius={15} style={styles.imageStyle}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyles}>{thisZone[i].title}</Text>
            </View>
          </Image>
        </TouchableOpacity>)
      }
    }

    let zone = this.props.navigation.state.params.sendZone

    if (zone == 'one') {
      getZoneMap(zoneOne, 'Zone 1')
    }
    if (zone == 'two') {
      getZoneMap(zoneTwo, 'Zone 2')
    }

    if (zone == 'three') {
      getZoneMap(zoneThree, 'Zone 3')
    }
    if (zone == 'four') {
      getZoneMap(zoneFour, 'Zone 4')
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
    flex: 1,
    backgroundColor: 'white'
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
    borderRadius: 15,
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
