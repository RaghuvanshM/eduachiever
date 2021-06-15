import React, {Component} from 'react';
import {
  FlatList,
  Text,
  TextInput,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import {compose} from 'redux';
import ChooseBoardCard from '../../controls/ChooseBoard/ChooseBoardCard';
import images from '../../utils/Images';
import styles from './style';
import Colors from '../../utils/Colors';

export default class ChooseBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, title: 'CBSE Board', image: require('../../assets/images/redtile.png')},
        {id: 1, title: 'ICSC Board ', image: images.redbg},
        {id: 1, title: 'ICSC Board', image: images.redbg},
        {id: 1, title: 'Uttar Pradesh Board ', image: images.redbg},
        {id: 1, title: 'CBSE Boared', image: images.redbg},
        {id: 1, title: 'CBSE Board', image: images.redbg},
        {id: 1, title: 'CBSE Board', image: images.redbg.toString()},
        {id: 1, title: 'CBSE Board', image: images.redbg},
        {id: 1, title: 'CBSE Board', image: images.redbg},
        {id: 1, title: 'CBSE Board', image: images.redbg},
        {id: 1, title: 'CBSE Boared', image: images.redbg},
        {id: 1, title: 'CBSE Board', image: images.redbg},
      ],
    };
  }
  renderItem = ({item, index}) => {
    console.log(index);
    return (
      <View
        style={{
          flex: 1,
          marginHorizontal: 4,
          marginVertical: 8,
          padding: 5,
        }}>
        <ImageBackground
          style={{
            width: '100%',
            aspectRatio: 2,
            borderRadius: 20,
          }}
          source={images.redbg}>
          <View style={styles.textcontainer}>
            <Text style={styles.titletext}>{item.title}</Text>
            <Image
              style={styles.iconimage}
              source={images.mortarbord}
              resizeMode="contain"
            />
          </View>
        </ImageBackground>
      </View>
    );
  };
  render() {
    let {data} = this.state;
    return (
      <ImageBackground
        source={images.choosecoursebg}
        style={{width: '100%', flex: 1}}>
        <Text style={{fontSize: 30, margin: '5%', color: Colors.themeColor1}}>
          Choose Board
        </Text>
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
        <FlatList
          nestedScrollEnabled={false}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          data={data}
          numColumns={2}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
        />
      </ImageBackground>
    );
  }
}
