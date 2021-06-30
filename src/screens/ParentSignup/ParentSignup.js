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
          <Button
            title={'Signup'}
            style={{width: '80%', marginTop: '2%'}}
            textStyle={styles.buttontext}
          />
          <View style={styles.bottomText}>
            <Text style={{fontSize: 18}}>Already a Member ?</Text>
            <TouchableOpacity
             onPress={() => {
              this.props.navigation.navigate('parentParentScreen');
            }}
            >
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

