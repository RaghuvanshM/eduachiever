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
import styles from './style';
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
            <Image
                source={images.questionmark}
                resizeMode="contain"
                style={{height:30,width:30,justifyContent:'center',alignSelf:'center',marginRight:'2%'}}
              />
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
