import React, {Component, Fragment} from 'react';
import {Text, TextInput, View, ImageBackground, Image} from 'react-native';
import images from '../../utils/Images';
class ChooseBoardCard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentDidMount() {}
  render() {
    return (
      <View style={{flex:1}}>
        <Image
          source={images.redbg}
          style={{width: '48%', margin: '1%', borderRadius: 10}}
        />
        <Text style={{position: 'absolute'}}>jakfjdkjasd</Text>
      </View>
    );
  }
}
export default ChooseBoardCard;
