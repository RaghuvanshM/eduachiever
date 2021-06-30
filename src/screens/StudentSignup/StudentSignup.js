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
  keyboaw
} from 'react-native';
import images from '../../utils/Images';
import Colors from '../../utils/Colors';
import styles from './style';
import Button from '../../controls/Button/Button';

export default class StudentSingup extends Component {
  render() {
    return (
      //  <Text onPress={()=>this.props.navigation.navigate('authStack')}>Splash Screen</Text>
      <ImageBackground
        source={images.studentsignup}
        resizeMode="stretch"
        style={{height: '100%'}}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '3%',
          }}>
          <Text style={styles.label}>STUDENT SIGNUP</Text>
          <View style={{...styles.textboxwraper, marginTop: '10%'}}>
            <View style={styles.iconwraper}>
              <Image
                style={styles.iconimage}
                source={images.user}
                resizeMode="contain"
              />
            </View>
            <View style={{justifyContent: 'center', flex: 1}}>
              <TextInput
                maxLength={10}
                keyboardType={'phone-pad'}
                placeholder={'Enter Name'}
                style={styles.textbox}
                placeholderTextColor={Colors.placeholdercolor}
              />
            </View>
          </View>
          <View style={styles.textboxwraper}>
            <View style={styles.iconwraper}>
              <Image
                style={styles.iconimage}
                source={images.phone}
                resizeMode="contain"
              />
            </View>
            <View style={{justifyContent: 'center', flex: 1}}>
              <TextInput
                //  defaultValue={this.state.mobile}
                //  onChangeText={val => this.setState({mobile: val})}
                maxLength={10}
                keyboardType={'phone-pad'}
                placeholder={'Phone number'}
                style={styles.textbox}
                placeholderTextColor={Colors.placeholdercolor}

              />
            </View>
          </View>
          <View style={styles.textboxwraper}>
            <View style={styles.iconwraper}>
              <Image
                style={styles.iconimage}
                source={images.email}
                resizeMode="contain"
              />
            </View>
            <View style={{justifyContent: 'center', flex: 1}}>
              <TextInput
                //  defaultValue={this.state.mobile}
                //  onChangeText={val => this.setState({mobile: val})}
                maxLength={10}
                keyboardType={'phone-pad'}
                placeholder={'Email'}
                style={styles.textbox}
                placeholderTextColor={Colors.placeholdercolor}

              />
            </View>
          </View>
          <View style={styles.textboxwraper}>
            <View style={styles.iconwraper}>
              <Image
                style={styles.iconimage}
                source={images.schoolcampus}
                resizeMode="contain"
              />
            </View>
            <View style={{justifyContent: 'center', flex: 1}}>
              <TextInput
                //  defaultValue={this.state.mobile}
                //  onChangeText={val => this.setState({mobile: val})}
                maxLength={10}
                keyboardType={'phone-pad'}
                placeholder={'Mobile number'}
                style={styles.textbox}
                placeholderTextColor={Colors.placeholdercolor}

              />
            </View>
          </View>
          <View style={styles.textboxwraper}>
            <View style={styles.iconwraper}>
              <Image
                style={styles.iconimage}
                source={images.gears}
                resizeMode="contain"
              />
            </View>
            <View style={{justifyContent: 'center', flex: 1}}>
              <TextInput
                //  defaultValue={this.state.mobile}
                //  onChangeText={val => this.setState({mobile: val})}
                maxLength={10}
                keyboardType={'phone-pad'}
                placeholder={'Refrence Code (Optional)'}
                style={styles.textbox}
                                placeholderTextColor={Colors.placeholdercolor}

              />
            </View>
          </View>
          <Button
            title={'Signup'}
            style={{width: '80%', marginTop: '2%'}}
            textStyle={styles.buttontext}
          />

          {/* <TouchableOpacity style={styles.buttonwraper}>
            <Text style={styles.buttontext}>SignUp</Text>
          </TouchableOpacity> */}
          <View style={styles.bottomText}>
            <Text style={{fontSize: 18}}>Already a Member ?</Text>
            <TouchableOpacity
              onPress={()=>{this.props.navigation.navigate('studentLoginScreen')}}
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
