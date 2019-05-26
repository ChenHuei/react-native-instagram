import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

class Favorite extends Component {

  static navigationOptions = {

    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-bookmarks" style={{ color:tintColor }} />
    )
  }

  render() {
    return (
      <TouchableOpacity 
        style={ styles.container}
        >
        <Text>FAVORITE PAGE</Text>
      </TouchableOpacity>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Favorite
