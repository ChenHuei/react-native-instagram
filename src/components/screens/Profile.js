import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import config from '../../config';
import { Icon } from 'native-base';
import PostList from '../PostList';
// import Icon from 'react-native-vector-icons/FontAwesome';

let images = [
  require('../../../static/1.jpeg'),
  require('../../../static/2.jpeg'),
  require('../../../static/3.jpeg'),
  require('../../../static/4.jpeg'),
  require('../../../static/5.jpeg'),
  require('../../../static/6.jpeg'),
  require('../../../static/7.jpeg'),
  require('../../../static/8.jpeg'),
  require('../../../static/9.jpeg'),
  require('../../../static/10.jpeg'),
  require('../../../static/11.jpeg'),
  require('../../../static/12.jpeg')
]

let {width,height} = Dimensions.get('window')

class Profile extends Component {

  static navigationOptions = {

    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-person" style={{ color:tintColor }} />
    )
  }

  constructor(props) {
    super(props)

    this.state= {
      activeIndex: 0
    }
  }

  changeActivedHandler = (index) => {
    this.setState({
      activeIndex: index
    })
  }
  renderSection = () => {
    if (this.state.activeIndex === 0 ) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
          {this.renderSectionBox()}
        </View>
      )
    } else if (this.state.activeIndex === 1 ) {
      return (
        <PostList />
      )
    }
  }

  renderSectionBox = () => {
    return images.map((image, index) => {
      return (
        <View 
          key={index}
          style={[{width: (width)/3-1}, {height: (width)/3-1}, index % 3 !== 0 ? {marginLeft: 1}: {marginLeft: 0}, {marginBottom: 1}]}
        >
          <Image
            style={{ flex: 1, width:undefined, height:undefined}}
            source={image}
          />
        </View>
      )
    })
  }

  render() {
    return (
      <View style={{ backgroundColor: 'rgb(249,249,249)' }}>
        <View 
          style={{width: '100%',
                  height: config.styleConstant.rowHeight,
                  marginTop: 22,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems:'center',
                  backgroundColor: 'rgb(248,248,248)',
                  borderBottomColor: 'rgb(233,233,233)',
                  borderBottomWidth: StyleSheet.hairlineWidth
                }}>
          <Icon style={{ paddingLeft: 10, fontSize: 28 }} name="ios-camera" />
          <Text>zhenhuei</Text>
          <Icon style={{ paddingRight: 10, fontSize: 28 }} name="ios-shuffle" />
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal:10}}>
          <View style={{ flex: 1 }}>
            <Image 
              source={{uri: 'https://images.unsplash.com/photo-1528977695568-bd5e5069eb61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a9c071a597ac682d3682549c12501c63&auto=format&fit=crop&w=1500&q=80'}}
              style={{ width: 72, height: 72, borderRadius: 36 }}
            >
            </Image>
          </View>
          <View style={{ flex: 3 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal:10 }}>
              <View style={{ paddingHorizontal: 10, alignItems: 'center' }}>
                <Text>7</Text>
                <Text style={{ fontSize: 12, color: 'gray'}}>posts</Text>
              </View>
              <View style={{ paddingHorizontal: 10, alignItems: 'center' }}>
                <Text>174</Text>
                <Text style={{ fontSize: 12, color: 'gray'}}>followers</Text>
              </View>
              <View style={{ paddingHorizontal: 10, alignItems: 'center' }}>
                <Text>124</Text>
                <Text style={{ fontSize: 12, color: 'gray'}}>following</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={{borderColor: '#000',
                        borderWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 8,
                        marginHorizontal: 4,
                        borderRadius: 5,
                        paddingHorizontal: 60,
                        paddingVertical: 4
                }}>
                <Text style={{ fontSize: 12 }}>EditProfile</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{borderColor: '#000',
                        borderWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 8,
                        marginHorizontal: 4,
                        borderRadius: 5,
                        paddingHorizontal: 24,
                        paddingVertical: 4
                }}
              >
                <Icon name="ios-settings" style={{ fontSize: 20 }}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal:10 }}>
          <Text style={{ paddingVertical:4, fontWeight: 'bold' }}>ZhenHuei Chen</Text>
          <Text style={{ paddingBottom:8 }}>zhc@intella.co</Text>
        </View>
        <View>
          <View style={{ flexDirection: 'row',justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5', paddingVertical: 8}}>
            <View>
              <Icon 
                name="ios-keypad" 
                style={[this.state.activeIndex === 0 ? { color: '#00BFFF'} : {} ]}
                onPress={()=> this.changeActivedHandler(0)}
              />
            </View>
            <View>
              <Icon
                name="ios-film"
                style={[this.state.activeIndex === 1 ? { color: '#00BFFF'} : {} ]}
                onPress={()=> this.changeActivedHandler(1)}
              />
            </View>
            <View>
              <Icon 
                name="ios-alarm"
                style={[this.state.activeIndex === 2 ? { color: '#00BFFF'} : {} ]}
                onPress={()=> this.changeActivedHandler(2)}
              />
            </View>
            <View>
              <Icon
                name="ios-paper"
                style={[this.state.activeIndex === 3 ? { color: '#00BFFF'} : {} ]}
                onPress={()=> this.changeActivedHandler(3)}
              />
            </View>
          </View>
        </View>
        {this.renderSection()}
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userText: {
    fontSize: 2
  }
})

export default Profile
