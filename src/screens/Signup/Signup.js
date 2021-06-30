import React, {Component} from 'react';
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
        style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={styles.titletext}>SIGNUP</Text>
          <TouchableOpacity
            style={styles.imagewithtext}
            onPress={() => {
              this.props.navigation.navigate('studentSignupScreen');
            }}>
            <ImageBackground
              style={{flex: 1}}
              source={images.signupbg}
              resizeMode="cover">
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
          <TouchableOpacity
            style={styles.imagewithtext}
            onPress={() => {
              this.props.navigation.navigate('parentSignupScreen');
            }}>
            <ImageBackground
              style={{flex: 1}}
              source={images.signupbg}
              resizeMode="cover">
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
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.bottomtext}>Alredy a Member ? </Text>
            <Text style={styles.logintext}>Login</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
