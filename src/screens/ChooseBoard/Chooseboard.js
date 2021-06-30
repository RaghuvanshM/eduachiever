import React, { Component } from 'react';
import {
  FlatList,
  Text,
  TextInput,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import { compose } from 'redux';
import ChooseBoardCard from '../../controls/ChooseBoard/ChooseBoardCard';
import images from '../../utils/Images';
import styles from './style';
import Colors from '../../utils/Colors';

export default class ChooseBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedid: '',
      data: [
        {
          id: 1,
          title: 'CBSE Board',
          image: require('../../assets/images/redtile.png'),
        },
        {
          id: 2,
          title: 'ICSC Board ',
          image: require('../../assets/images/blue.png'),
        },
        {
          id: 3,
          title: 'ISC Board',
          image: require('../../assets/images/greentile.png'),
        },
        {
          id: 4,
          title: 'Uttar Pradesh Board ',
          image: require('../../assets/images/darkblue.png'),
        },
        // {id: 1, title: 'CBSE Boared', image: images.redbg},
        // {id: 1, title: 'CBSE Board', image: images.redbg},
        // {id: 1, title: 'CBSE Board', image: images.redbg.toString()},
        // {id: 1, title: 'CBSE Board', image: images.redbg},
        // {id: 1, title: 'CBSE Board', image: images.redbg},
        // {id: 1, title: 'CBSE Board', image: images.redbg},
        // {id: 1, title: 'CBSE Boared', image: images.redbg},
        // {id: 1, title: 'CBSE Board', image: images.redbg},
      ],
    };
  }
  boardCardPress = item => {
    this.setState({
      selectedid: item.id,
    });
  };
  renderItem = ({ item, index }) => {

    return (
      <TouchableOpacity
        style={{
          flex: 1,
          marginHorizontal: 4,
          marginVertical: 8,
          padding: 5,
        }}
        onPress={() => {
          this.boardCardPress(item);
        }}>

        <ImageBackground
          style={{
            width: '100%',
            aspectRatio: 2,
            borderRadius: 20,
          }}
          source={item.image}>
          {this.state.selectedid == item.id ? <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              position:'absolute',
                top:0,
                right:0
            }}>
            <Text></Text>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                
              }}>
              <Image
                source={images.checkmark}
                style={{
                  height: 30,
                  width: 30,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
              />
            </View>
          </View> : null}
          <View style={styles.textcontainer}>
            <Text style={styles.titletext}>{item.title}</Text>
            <Image
              style={styles.iconimage}
              source={images.mortarbord}
              resizeMode="contain"
            />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  render() {
    let { data } = this.state;
    return (
      <ImageBackground
        source={images.choosecoursebg}
        style={{ width: '100%', flex: 1 }}>
        <View style={{ flex: 0.5, justifyContent: 'center' }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: '3%',
            }}>
            <View
              style={{
                flex: 0.5,
                justifyContent: 'center',
              }}>
              <Text style={styles.toptitletext}>CHOOSE BOARD</Text>
              <Image source={images.stripe} style={{ width: '50%' }} />
            </View>
            <ImageBackground
              source={images.boardbg}
              style={{ flex: 1, width: '100%', aspectRatio: 2 }}
              resizeMode="cover"></ImageBackground>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <View style={styles.searchTextContainer}>
              <TextInput
                placeholder={'Search'}
                placeholderTextColor={Colors.serachcolor}
                style={styles.searchText}
              />
            </View>
            <View style={styles.searchIconContainer}>
              <Image source={images.magnifying} style={styles.magnifier} />
            </View>
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <FlatList
            nestedScrollEnabled={false}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            showsVerticalScrollIndicator={false}
            data={data}
            numColumns={2}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
          />
        </View>
      </ImageBackground>
    );
  }
}
