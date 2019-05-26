import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Login extends Component {
  register () {
    this.props.navigation.navigate("register");
  }

  render() {
    return (
      <TouchableOpacity 
        style={ styles.container}
        onPress={() => this.register()}
        >
        <Text>Hello, Nice to meet you !</Text>
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

export default Login
