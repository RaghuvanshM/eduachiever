import {StyleSheet,StatusBar} from 'react-native';
import Colors from '../../utils/Colors';
const style = StyleSheet.create({
  textcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '4%',
  },
  titletext: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    lineHeight: 30,
    flex: 1,
  },
  iconimage: {
    height: 40,
    width: 40,
  },
  // searchTextContainer: {
  //   width: '98%',
  //   height: '5%',
  //   elevation: 7,
  //   backgroundColor: 'white',
  //   alignItems: 'center',
  //   alignSelf: 'center',
  //   borderRadius:10,
  //   flexDirection:'row',
  //   justifyContent:'space-between',
  //   marginVertical:10,

  // },
  searchText: {
    width: '100%',
    color: Colors.themeColor1,
    fontFamily: Colors.font,
    fontSize: 15,
    paddingVertical: 0,
    borderWidth: 3,
  },
  // titletext:{
  //   fontSize:30,
  //   color:Colors.themeColor1,
  //   marginTop:StatusBar.currentHeight
  
  // },
  //   searchContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  // },
  // searchContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   marginVertical:20
  // },
  searchBox: {
    backgroundColor: Colors.themeColor2,
    flexDirection: 'row',
    height: 50,
    borderRadius: 10,
    width:'98%',
    alignSelf:'center'

  },
  searchIconContainer: {
    paddingHorizontal: 13,
    justifyContent: 'center',
  },
  searchTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  searchText: {
    width: '90%',
    color: Colors.themeColor1,
    fontFamily: Colors.font,
    fontSize: 15,
    paddingVertical:0
  },
});

export default style;
