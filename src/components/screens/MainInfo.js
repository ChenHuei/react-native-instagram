import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import config from '../../config';
import PostList from '../PostList';
import { Icon, Header } from 'native-base';

class MainInfo extends Component {

  static navigationOptions = {

    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-home" style={{ color:tintColor }} />
    )
  }

  render() {
    
    return (
      <View style={ styles.container}>
        <View style={ styles.header}>
          <Icon style={ { paddingLeft: 10, fontSize: 28 }} name="ios-camera" />
          <Text>Instagram</Text>
          <Icon style={ { paddingRight: 10, fontSize: 24 }} name="ios-send" />
        </View>
        <ScrollView>
          <View style={ styles.storyBar }>
            <View style={ styles.storyBarText }>
              <Text style={{ paddingHorizontal: 10, fontSize: 12 }}>限時動態</Text>
              <View style={{ flexDirection:'row', alignContent:"center" }}>
                <Icon name="md-play" style={{ fontSize: 12, paddingRight: 5 }}/>
                <Text style={{ paddingRight: 10, fontSize: 12 }}>Watch All</Text>
              </View>
            </View>
            <View style={{ flex: 2, justifyContent: 'center'}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle= {{
                  alignItems: 'center',
                  paddingRight: 10
                }}
                >
                <Image 
                source={{uri: 'https://images.unsplash.com/photo-1529932260967-af9d3bbd8138?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3e872d900875102bc21577a8f6f1345&auto=format&fit=crop&w=634&q=80'}}
                style={ styles.storyBarImg }
                >
                </Image>
                <Image 
                  source={{uri: 'https://images.unsplash.com/photo-1528977695568-bd5e5069eb61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a9c071a597ac682d3682549c12501c63&auto=format&fit=crop&w=1500&q=80'}}
                  style={ styles.storyBarImg }
                >
                </Image>
                <Image 
                  source={{uri: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d7ef5a79190207ccb44c7c2e101e13ed&auto=format&fit=crop&w=1500&q=80'}}
                  style={ styles.storyBarImg }
                >
                </Image>
                <Image 
                source={{uri: 'https://images.unsplash.com/photo-1529932260967-af9d3bbd8138?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3e872d900875102bc21577a8f6f1345&auto=format&fit=crop&w=634&q=80'}}
                style={ styles.storyBarImg }
                >
                </Image>
                <Image 
                  source={{uri: 'https://images.unsplash.com/photo-1528977695568-bd5e5069eb61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a9c071a597ac682d3682549c12501c63&auto=format&fit=crop&w=1500&q=80'}}
                  style={ styles.storyBarImg }
                >
                </Image>
                <Image 
                  source={{uri: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d7ef5a79190207ccb44c7c2e101e13ed&auto=format&fit=crop&w=1500&q=80'}}
                  style={ styles.storyBarImg }
                >
                </Image>
                <Image 
                source={{uri: 'https://images.unsplash.com/photo-1529932260967-af9d3bbd8138?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3e872d900875102bc21577a8f6f1345&auto=format&fit=crop&w=634&q=80'}}
                style={ styles.storyBarImg }
                >
                </Image>
                <Image 
                  source={{uri: 'https://images.unsplash.com/photo-1528977695568-bd5e5069eb61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a9c071a597ac682d3682549c12501c63&auto=format&fit=crop&w=1500&q=80'}}
                  style={ styles.storyBarImg }
                >
                </Image>
                <Image 
                  source={{uri: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d7ef5a79190207ccb44c7c2e101e13ed&auto=format&fit=crop&w=1500&q=80'}}
                  style={ styles.storyBarImg }
                >
                </Image>
              </ScrollView>
            </View>
          </View>
          <PostList />
        </ScrollView>
      </View>
      // <View style = { styles.container }>
      //   <View style = { styles.header }>
      //     <Text>Instagram</Text>
      //   </View>
      //   <PostList />
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(249,249,249)'
  },
  storyBar: {
    height: 80,
    backgroundColor: 'rgb(249,249,249)',
    backgroundColor: 'rgb(249,249,249)',
    borderBottomColor: 'rgb(233,233,233)',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  storyBarText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  storyBarImg: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderColor: 'pink',
    borderWidth: 2,
    marginLeft: 8
  },
  header: {
    width: '100%',
    height: config.styleConstant.rowHeight,
    flexDirection: 'row',
    marginTop: 22,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(249,249,249)',
    borderBottomColor: 'rgb(233,233,233)',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
})

export default MainInfo
