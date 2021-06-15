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

export default class Splash extends Component {
  render() {
    return (
      <ImageBackground
        source={images.studentsignup}
        resizeMode="stretch"
        style={{height: '100%'}}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
          <Text style={styles.label}>PARENT SIGNUP </Text>
          <View style={{...styles.textboxwraper, marginTop: '10%'}}>
            <View style={styles.iconwraper}>
              <Image
                style={styles.iconimage}
                source={images.user}
                resizeMode="stretch"
              />
            </View>
            <View style={{justifyContent: 'center', flex: 1}}>
              <TextInput
                maxLength={10}
                placeholder={'Enter Name'}
                style={styles.textbox}
                // placeholderTextColor={Colors.themeColor1 + '70'}
              />
            </View>
          </View>
          <View style={{...styles.textboxwraper}}>
            <View style={styles.iconwraper}>
              <Image
                style={styles.iconimage}
                source={images.phone}
                resizeMode="contain"
              />
            </View>
            <View style={{justifyContent: 'center', flex: 1}}>
              <TextInput
                maxLength={10}
                keyboardType={'phone-pad'}
                placeholder={'Phone Number'}
                style={styles.textbox}
                // placeholderTextColor={Colors.themeColor1 + '70'}
              />
            </View>
          </View>
          <View style={{...styles.textboxwraper}}>
            <View style={styles.iconwraper}>
              <Image
                style={styles.iconimage}
                source={images.email}
                resizeMode="contain"
              />
            </View>
            <View style={{justifyContent: 'center', flex: 1}}>
              <TextInput
                maxLength={10}
                placeholder={'Email'}
                style={styles.textbox}
                // placeholderTextColor={Colors.themeColor1 + '70'}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.buttonwraper}>
            <Text style={styles.buttontext}>Signup</Text>
          </TouchableOpacity>
          <View style={styles.bottomText}>
            <Text style={{fontSize: 18}}>Alredy a Member ?</Text>
            <TouchableOpacity>
              <Text style={{fontSize: 18, color: Colors.themeColor1}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
  buttonwraper: {
    backgroundColor: Colors.themeColor1,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginTop: '5%',
  },
  buttontext: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    paddingVertical: 10,
    justifyContent: 'center',
  },
  bottomText: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: '5%',
  },
});
