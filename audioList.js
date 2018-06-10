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
    url: 'bapsag_pos1_informationdesk.mp3',
    image: require('./img/Welcome_to_BAPS_Shri_Swaminarayan_Mandir.jpg'),
    number: '1'
  }, {
    title: 'Haveli Atrium',
    url: 'bapsag_pos2_haveliatrium',
    image: require('./img/Haveli_Atrium.jpg'),
    number: '2'
  }, {
    title: 'Assembly Hall',
    url: 'bapsag_pos3_assemblyhall.mp3',
    image: require('./img/Assembly_Hall.jpg'),
    number: '3'
  }, {
    title: "Swamishri's Portrait",
    url: 'bapsag_pos4_swamishrisportrait.mp3',
    image: require('./img/Swamishris_Portrait.jpg'),
    number: '4'
  }
];



const zoneTwo = [
  {
    title: 'Walkway',
    url: 'bapsag_pos5_bluecarpet.mp3',
    image: require('./img/Walkway.jpg'),
    number: '5'
  }, {
    title: 'Photo Display - Interfaith',
    url: 'bapsag_pos6_photodisplay1.mp3',
    image: require('./img/Photo_Display_Interfaith.jpg'),
    number: '6'
  }, {
    title: 'Photo Display  - Charity Activities',
    url: 'bapsag_pos7_photodisplay2.mp3',
    image: require('./img/Photo_Display_Charity_Activities.jpg'),
    number: '7'
  }
];



const zoneThree = [
  {
    title: 'Abhishek Mandap',
    url: 'bapsag_pos8_abhishekmandap.mp3',
    image: require('./img/Abhishek_Mandap.jpg'),
    number: '8'
  }, {
    title: 'Upper Sanctum',
    url: 'bapsag_pos9_uppersanctum.mp3',
    image: require('./img/Upper_Sanctum.jpg'),
    number: '9'
  }, {
    title: 'Carved Pillars',
    url: 'bapsag_pos10_infrontofcarvedpillars.mp3',
    image: require('./img/Carved_Pillars.jpg'),
    number: '10'
  }, {
    title: 'Central Dome',
    url: 'bapsag_pos11_centraldome.mp3',
    image: require('./img/Central_Dome.jpg'),
    number: '11',
  }, {
    title: 'Devotion & Worship',
    url: 'bapsag_pos12_devotion.mp3',
    image: require('./img/Devotion_&_Worship.jpg'),
    number: '12'
  }, {
    title: 'Bhagwan Swaminarayan',
    url: 'bapsag_pos13_bhagwanswaminarayan.mp3',
    image: require('./img/Bhagwan_Swaminarayan.jpg'),
    number: '13'
  }, {
    title: 'Gunatitanand Swami',
    url: 'bapsag_pos14_gunatitanandswami.mp3',
    image: require('./img/Gunatitanand_Swami.jpg'),
    number: '14'
  }, {
    title: 'Gopalanand Swami',
    url: 'bapsag_pos15_gopalanandswami.mp3',
    image: require('./img/Gopalanand_Swami.jpg'),
    number: '15'
  }, {
    title: 'Ghanshyam Maharaj',
    url: 'bapsag_pos16_ghanshyammaharaj.mp3',
    image: require('./img/Ghanshyam_Maharaj.jpg'),
    number: '16'
  }, {
    title: 'Sukh Shayya',
    url: 'bapsag_pos17_sukhshayya.mp3',
    image: require('./img/Sukh_Shayya.jpg'),
    number: '17'
  }, {
    title: 'Guru Parampara',
    url: 'bapsag_pos18_guruparampara.mp3',
    image: require('./img/Guru_Parampara.jpg'),
    number: '18'
  }, {
    title: 'Harikrishna Maharaj & Radha-Krishna',
    url: 'bapsag_pos19_harikrishnamaharaj_radhakrishna.mp3',
    image: require('./img/Harikrishna_Maharaj_&_Radha_Krishna.jpg'),
    number: '19'
  }, {
    title: 'Bhagatji Maharaj',
    url: 'bapsag_pos20_bhagatjimaharaj.mp3',
    image: require('./img/Bhagatji_Maharaj.jpg'),
    number: '20'
  }, {
    title: 'Shastriji Maharaj',
    url: 'bapsag_pos21_shastrijimaharaj.mp3',
    image: require('./img/Shastriji_Maharaj.jpg'),
    number: '21'
  }, {
    title: 'Yogiji Maharaj',
    url: 'bapsag_pos22_yogijimaharaj.mp3',
    image: require('./img/Yogiji_Maharaj.jpg'),
    number: '22'
  }, {
    title: 'Pramukh Swami Maharaj',
    url: 'bapsag_pos23_pramukhswamimaharaj.mp3',
    image: require('./img/Pramukh_Swami_Maharaj.jpg'),
    number: '23'
  }, {
    title: 'Shiva-Parvati',
    url: 'bapsag_pos24_shiva_parvati.mp3',
    image: require('./img/Shiva_Parvati.jpg'),
    number: '24'
  }, {
    title: 'Hanuman',
    url: 'bapsag_pos25_hanuman.mp3',
    image: require('./img/Hanuman.jpg'),
    number: '25'
  }, {
    title: 'Ganesh & Shivaling',
    url: 'bapsag_pos26_ganesh.mp3',
    image: require('./img/Ganesh_&_Shivaling.jpg'),
    number: '26',
  }, {
    title: 'Sita-Rama',
    url: 'bapsag_pos27_sita_ram.mp3',
    image: require('./img/Sita_Rama.jpg'),
    number: '27'
  }, {
    title: 'Carved Ceiling',
    url: 'bapsag_pos28_ceiling.mp3',
    image: require('./img/Carved_Ceiling.jpg'),
    number: '28'
  }, {
    title: 'Rosewood Doors',
    url: 'bapsag_pos29_doors.mp3',
    image: require('./img/Rosewood_Doors.jpg'),
    number: '29'
  }, {
    title: 'Porch',
    url: 'bapsag_pos30_porch.mp3',
    image: require('./img/Porch.jpg'),
    number: '30'
  }
];

const zoneFour = [
  {
    title: 'Exhibition',
    url: 'bapsag_pos31_exhibition.mp3',
    image: require('./img/Exhibition.jpg'),
    number: '31'
  }, {
    title: 'Thank You & Farewell',
    url: 'bapsag_pos32_messagefromhhpramukhswamimaharaj.mp3',
    image: require('./img/Thank_You_&_Farewell.jpg'),
    number: '32'
  }
];
export default class AudioList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      zone: zoneOne
    }

  }

  componentDidMount() {

    let zone = this.props.navigation.state.params.sendZone
    let zoneState = null;
    let zoneNumber = null;

    if (zone == 'one') {
      zoneState = zoneOne;
      zoneNumber = 'Zone 1'
    }
    if (zone == 'two') {
      zoneState = zoneTwo;
      zoneNumber = 'Zone 2'
    }

    if (zone == 'three') {
      zoneState = zoneThree;
      zoneNumber = 'Zone 3'
    }
    if (zone == 'four') {
      zoneState = zoneFour;
      zoneNumber = 'Zone 4'
    }

    this.setState({
      zone: zoneState,
      zoneNumber: zoneNumber
    })

  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.zoneTitle,
    headerRight: (<View></View>),
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center'
    }
  });

  handleNextButton = () => {

    const { zone, zoneNumber, id } = this.state;
    if (id < zone.length - 1) {


      this.props.navigation.navigate('AudioPlay', {
        previousButton: this.handlePreviousButton,
        nextButton: this.handleNextButton,
        key: zone[id + 1],
        title: zone[id + 1].title,
        url: zone[id + 1].url,
        image: zone[id + 1].image,
        number: zone[id + 1].number,
        zone: zoneNumber
      })
      this.setState({
        id: id + 1
      })

    }
  }

  handlePreviousButton = () => {

    const { zone, zoneNumber, id } = this.state;

    if (id != 0) {

      this.props.navigation.navigate('AudioPlay', {
        previousButton: this.handlePreviousButton,
        nextButton: this.handleNextButton,
        key: zone[id - 1],
        title: zone[id - 1].title,
        url: zone[id - 1].url,
        image: zone[id - 1].image,
        number: zone[id - 1].number,
        zone: zoneNumber
      })
      this.setState({
        id: id - 1
      })

    }
  }

  navigatePlay = (item, key) => {
    this.setState({
      id: key
    })
    this.props.navigation.navigate('AudioPlay', {
      previousButton: this.handlePreviousButton,
      nextButton: this.handleNextButton,
      key: key,
      title: item.title,
      url: item.url,
      image: item.image,
      number: item.number,
      zone: this.state.zoneNumber
    })
  }


  // static navigationOptions = { header: null};

  render() {


    var test = [];

    const { zone, zoneNumber } = this.state;

    return (<ScrollView style={styles.scrollContainer}  >
      <View style={styles.container} returnData={this.returnData}  >
        {/* {test} */}

        {zone.map((item, key) => (
          < TouchableOpacity key={key} style={styles.touchableImage} onPress={() => {
            this.navigatePlay(item, key)
          }}>

            <Image source={item.image} resizeMode={'cover'} borderRadius={15} style={styles.imageStyle}>
              <View style={styles.textContainer}>
                <Text style={styles.textStyles}>{item.title}</Text>
              </View>
            </Image>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView >);


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
