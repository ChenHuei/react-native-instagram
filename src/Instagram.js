import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { MainInfo, Login, Camera, Profile, Register, Search, Favorite } from './components/screens';
import { SwitchNavigator, TabNavigator, StackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon, Header } from 'native-base';

// const Tabs = createBottomTabNavigator({
const Tabs = TabNavigator({
  info: {
    screen: MainInfo
  },
  search: {
    screen: Search
  },
  camera: {
    screen: Camera
  },
  favorite: {
    screen: Favorite
  },
  profile: {
    screen: Profile
  }
},{
  // 是否再更改選項時設動畫
  animationEnabled: true,
  // 是否允許在標籤之間滑動
  swipeEnabled: true,
  // can be 'top' or 'bottom'
  tabBarPosition: 'bottom',
  // 配置標籤欄位
  tabBarOptions: {
    style: {
      ...Platform.select({
        android: {
          backgroundColor: '#fff'
        }
      })
    },
    // Label and icon color of the active tab
    activeTintColor: '#000',
    // Label and icon color of the inactive tab
    inactiveTintColor: '#d3d3d3',
    // 是否顯示標籤圖示
    showLabel: false,
    // 是否顯示標籤文字
    showIcon: true
  }
});

class Instagram extends Component { 

  static navigationOptions = {
    header: null
    // headerLeft: <Icon name="ios-camera-outline" style={{ paddingLeft: 10 }} />,
    // title: "Instagram",
    // headerRight: <Icon style={{ paddingRight: 10 }} name="ios-send-outline" />
  }
  render() {
    return (
      <Tabs />
    )
  }
}


export default Instagram
