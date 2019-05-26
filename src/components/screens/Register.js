import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class Register extends Component {

  login () {
    this.props.navigation.navigate("mainInfo")
  }

  render() {
    return (
      <View 
        style={ styles.container}
        >
        <Text>REGISTER PAGE</Text>
        <TextInput
          style= {{ width: '90%', height: 50, backgroundColor: '#fff', marginTop: 10, paddingHorizontal: 15 }}
          placeholder="username"
        />
        <TextInput
          style= {{ width: '90%', height: 50, backgroundColor: '#fff', marginTop: 10, paddingHorizontal: 15 }}
          secureTextEntry
          placeholder="password" 
        />
        <Button 
          title="Sign Up" 
          onPress= {() => this.login()}
        />
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    marginTop: 10,
    paddingHorizontal: 15,
  },
})

export default Register
