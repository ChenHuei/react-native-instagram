import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import config from '../../config';

class Post extends Component {

  constructor () {
    super();
    this.state = {
      likeCount: 0,
      screenWidth: 0,
      liked: false
    };
  }

  changeLikedHandler () {
    this.setState({
      liked: !this.state.liked,
      likeCount: this.state.likeCount + 1
    })
  }
  componentDidMount () {
    this.setState({
      screenWidth: Dimensions.get("window").width
    });
  }
  render() {
    const mainImageUrl = "https://images.unsplash.com/photo-1535320404287-416e2c6d2b41?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=12c7b98882a77aebcaab5eab5189ddd4" + "=s" + this.state.screenWidth + "-c";

    const heartIconColor = this.state.liked ? config.images.heartRedIcon : config.images.heartIcon
    const heartIconComment = this.state.liked ? config.images.heartBlackIcon : config.images.heartIcon
    return (
      <View style = { styles.container }>
        <View>
          <View style = { styles.userTopBar }>
            <View style = { styles.userBarLeft }>
              <Image
                style ={ [styles.userImage, { width: 25 , height: 25 }]}
                source={{uri: "https://banner2.kisspng.com/20180319/pde/kisspng-computer-icons-icon-design-avatar-flat-face-icon-5ab06e33bee962.122118601521511987782.jpg"}}
              >
              </Image>
              <Text>ZhenHuei</Text>
            </View>
            <View style = { styles.userBarRight }>
              <Image
                style ={ styles.settingImg }
                source={{uri: "https://cdn3.iconfinder.com/data/icons/iconano-random-stuff/512/126-More-512.png"}}
              >
              </Image>
            </View>
          </View>
          <TouchableOpacity 
            activeOpacity={0.7}
            onPress={ () => { this.changeLikedHandler() } }
          >
            <Image 
              style ={{ width: this.state.screenWidth , height: 400 }}
              source={{ uri: mainImageUrl }}
            >
            </Image>  
          </TouchableOpacity>
          <View style = {styles.userFooterBar}>
            <Image
              style ={ styles.userImage}
              source = { heartIconColor }
            >
            </Image>
            <Image
              style ={ styles.userImage}
              source = { config.images.chatIcon }
            >
            </Image>
            <Image
              style ={ styles.userImage}
              source = { config.images.shareIcon }
            >
            </Image>
          </View>
          <View style = { [styles.userFooterBar, { height: 30 }] }>
            <Image
              style ={ [styles.userImage, { width: 15 , height: 15, marginLeft: 13 }]}
              source = { heartIconComment }
            >
            </Image>
            <Text>{this.state.likeCount} Liked</Text>
          </View>
          <View style={ styles.userFooterDis }>
            <Text >Falling too fast to prepare for this, Tripping in the world could be dangerous, Everybody circling, it's vulturous, Negative, nepotist, Everybody waiting for the fall of man, Everybody praying for the end of times, Everybody hoping they could be the one, I was born to run, I was born for this, Whip, whip, Run me like a racehorse, Pull me like a ripcord, Break me down and build me up。</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userTopBar: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: config.styleConstant.rowHeight,
    backgroundColor: '#ffffff',
    borderBottomColor: 'rgb(233,233,233)',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  userBarLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  userImage: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
    // marginRight: 10,
  },
  userBarRight: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginLeft: 10,
  },
  settingImg: {
    width: 15,
    height: 15
  },
  userFooterBar: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    backgroundColor: '#ffffff',
    // borderBottomColor: 'rgb(233,233,233)',
    // borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
  },
  userFooterDis: {
    paddingHorizontal: 10,
    fontSize: 12,
    paddingBottom: 4,
    marginBottom: 4,
    backgroundColor: '#ffffff',
    borderBottomColor: 'rgb(233,233,233)',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
})

export default Post
