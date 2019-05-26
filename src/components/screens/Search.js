import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

class Search extends Component {

  static navigationOptions = {

    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-search" style={{ color:tintColor }} />
    )
  }

  render() {
    return (
      <TouchableOpacity 
        style={ styles.container}
        >
        <Text>SEARCH PAGE</Text>
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

export default Search
