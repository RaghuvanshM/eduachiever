import React, {Component} from 'react';
import {Text, View, Image, ImageBackground, Dimensions} from 'react-native';
import styles from './style';
import images from '../../utils/Images';
export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setinterval: '',
    };
  }
  navigateTonext = () => {};
  componentDidMount() {
   setTimeout(() => {
      this.props.navigation.navigate('authStack');
    }, 2000);
  }
  render() {
    return (
      // <View>
      //   {/* <Text onPress={() => this.props.navigation.navigate('authStack')}>Splash Screen</Text> */}
      //   <Image
      //    source={images.splash}
      //    style={{height:400,width:500}}
      //   />
      // </View>
      <ImageBackground
        source={images.splash}
        resizeMode="cover"
        style={{width: '100%', flex:1}}></ImageBackground>
    );
  }
}
