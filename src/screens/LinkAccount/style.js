import { StyleSheet } from "react-native";
import Colors from '../../utils/Colors';

export default StyleSheet.create({
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
  buttonwraperleft: {
    backgroundColor: Colors.themeColor1,
    width: '35%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginTop: '5%',
    marginLeft: '9%',
  },
  buttonwraperright: {
    borderColor: Colors.themeColor1,
    width: '35%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginTop: '5%',
    borderWidth: 2,
  },

  buttontext: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    paddingVertical: 10,
    justifyContent: 'center',
  },
  buttontextskip: {
    fontSize: 20,
    color: Colors.themeColor1,
    alignSelf: 'center',
    fontWeight: 'bold',
    paddingVertical: 10,
    justifyContent: 'center',
  },
  bottomText: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: '20%',
  },
});