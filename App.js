import React, { Component } from 'react';
import { Login, Register } from './src/components/screens';
import { StackNavigator } from 'react-navigation';
import Instagram from './src/Instagram';

const IntroStack = StackNavigator({
  login: {
    screen: Login
  },
  register: {
    screen: Register
  },
  mainInfo: {
    screen: Instagram
  }
})

export default class App extends Component {
  render() {
    return ( 
      <IntroStack />
    );
  }
}

// const MainStack = SwitchNavigator({
//   login: {
//     screen: IntroStack
//   },
//   mainInfo: {
//     screen: Tabs
//   }
// });
