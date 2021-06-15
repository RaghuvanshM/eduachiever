import React, {Component} from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import images from '../../utils/Images';
import Colors from '../../utils/Colors';

export default class LinkStudentAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isnextPress: false,
      isskipPress: false,
    };
  }
  onSkipPress = () => {
    this.setState({isnextPress: false, isskipPress: true});
  };
  onnextPress = () => {
    this.setState({isnextPress: true, isskipPress: false});
  };
  render() {
    return (
      <ImageBackground
        source={images.studentsignup}
        resizeMode="stretch"
        style={{height: '100%'}}>
        <View style={{flexGrow: 1, justifyContent: 'center'}}>
          <Text style={styles.label}>LINK STUDENT ACCOUNT </Text>
          <Text style={{fontSize: 18, alignSelf: 'center', marginTop: '2%'}}>
            Enter Unique Student Invitaion Code{' '}
          </Text>
          <View style={{...styles.textboxwraper}}>
            <View style={styles.iconwraper}>
              <Image
                style={styles.iconimage}
                source={images.gears}
                resizeMode="contain"
              />
            </View>
            <View style={{justifyContent: 'center', flex: 1}}>
              <TextInput
                maxLength={10}
                placeholder={'Enter Code'}
                style={styles.textbox}
                // placeholderTextColor={Colors.themeColor1 + '70'}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              style={styles.buttonwraperright}
              onPress={() => {
                this.onSkipPress();
              }}>
              <Text style={styles.buttontextskip}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonwraperleft}
              onPress={() => {
                this.onSkipPress();
              }}>
              <Text style={styles.buttontext}>Next</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomText}>
            <Text style={{fontSize: 18}}>Want to invite a Student ?</Text>
            <TouchableOpacity>
              <Text style={{fontSize: 18, color: Colors.themeColor1}}>
                Click here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    color: Colors.themeColor1,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  textbox: {
    fontSize: 16,
    paddingVertical: 0,
    margin: 0,
  },
  textboxwraper: {
    borderWidth: 1,
    borderColor: '#b5b3b3',
    borderRadius: 100,
    // paddingVertical: 13,
    //paddingHorizontal: 20,
    flexDirection: 'row',
    width: '80%',
    marginTop: '4%',
    alignSelf: 'center',
  },
  iconwraper: {
    backgroundColor: Colors.themeColor1,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    alignSelf: 'center',
  },
  iconimage: {
    marginHorizontal: 10,
    height: 25,
    width: 25,
    marginVertical: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonwraperleft: {
    backgroundColor: Colors.themeColor1,
    width: '35%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginTop: '5%',
    marginLeft: '9%',
  },
  buttonwraperright: {
    borderColor: Colors.themeColor1,
    width: '35%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginTop: '5%',
    borderWidth: 2,
  },

  buttontext: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    paddingVertical: 10,
    justifyContent: 'center',
  },
  buttontextskip: {
    fontSize: 20,
    color: Colors.themeColor1,
    alignSelf: 'center',
    fontWeight: 'bold',
    paddingVertical: 10,
    justifyContent: 'center',
  },
  bottomText: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: '20%',
  },
});
