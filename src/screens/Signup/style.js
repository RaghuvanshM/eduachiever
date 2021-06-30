import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

const style = StyleSheet.create({
  imagewithtext: {
    width: '80%',
    //backgroundColor: 'red',
     aspectRatio:3,
    elevation:5,
    alignSelf: 'center',
    borderRadius:5,
    marginTop: '5%',
  },
  pimage: {
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
  signuptext: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: Colors.font,
    color: Colors.themeColor1,
    flex: 0.8,
    alignSelf: 'center',
    marginLeft: '10%',
  },
  bottomtext: {
    fontSize: 20,
    // alignSelf: 'center',
    marginTop: '2%',
    marginLeft: '10%',
    color:'#000000'
  },
  logintext: {
    fontSize: 20,
    // alignSelf: 'center',
    marginTop: '2%',
  },
  titletext: {
    fontSize: 20,
    color: Colors.themeColor1,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default style;
