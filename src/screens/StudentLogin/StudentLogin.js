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
import Button from '../../controls/Button/Button';

export default class StudentLogin extends Component {
  render() {
    return (
      <ImageBackground
        source={images.studentsignup}
        resizeMode="stretch"
        style={{height: '100%'}}>
        <View style={{flexGrow: 1, justifyContent: 'center'}}>
          <Text style={styles.label}>STUDENT LOGIN </Text>

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
                placeholderTextColor={Colors.placeholdercolor}
              />
            </View>
          </View>
          <Button
            title={'LOGIN'}
            style={{width: '80%', marginTop: '7%'}}
            textStyle={styles.buttontext}
          />
          <View style={styles.bottomText}>
            <Text style={{fontSize: 18}}>New User ?</Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('studentSignupScreen');
              }}>
              <Text style={{fontSize: 18, color: Colors.themeColor1}}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
