import React, { Component } from 'react';
import {
  ImageBackground,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import images from '../../utils/Images';
import styles from './style';
export default class Splash extends Component {
  render() {
    return (
      <ImageBackground
        source={images.studentsignup}
        resizeMode="stretch"
        style={{ height: '100%' }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={styles.titletext}>SIGNUP</Text>
          <TouchableOpacity 
          style={styles.imagewithtext}
          onPress={()=>{this.props.navigation.navigate('studentSignupScreen')}}
          >
            <ImageBackground
              style={{ height: '100%' }}
              source={images.signupbg}
              resizeMode='cover'>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Image source={images.parrent} style={styles.pimage} />
                <Text style={styles.signuptext}>STUDENT</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <View style={styles.imagewithtext}>
            <ImageBackground
              style={{ height: '100%' }}
              source={images.signupbg}
              resizeMode="stretch">
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Image source={images.parrent} style={styles.pimage} />
                <Text style={styles.signuptext}>PARENT</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.bottomtext}>Alredy a Member ? </Text>
            <Text style={styles.logintext}>Login</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
