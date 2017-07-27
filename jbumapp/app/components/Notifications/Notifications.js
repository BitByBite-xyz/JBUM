import React, { Component } from 'react';
import{
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import images from '../../config/images';

export default class Notifications extends Component{
  constructor(props) {
    super(props);

    this.state = {
      notiNum: 4
    }
  }

  onPress = () => {
    console.log(this.props);
    this.props.navigation.navigate('Ask');
  }
  render(){
    return(
      <TouchableOpacity onPress={this.onPress}>
       <Image source={images.inboxCircle} style={{width: 31, height: 31, marginRight: 10}}>
       <Text style={{marginTop: 7, marginLeft: 12, color: 'white', fontFamily: 'Avenir', fontWeight: '500'}}>
        {this.state.notiNum}
       </Text>
       </Image>
      </TouchableOpacity>
    );
  }
};
