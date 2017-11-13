import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { Button } from 'react-native-elements'
import Meteor from 'react-native-meteor';
import Confetti from 'react-native-confetti';
import Video from 'react-native-video';

import vid from '../../../images/jbumapp.mov'
const colors = ['#B565C6','#D63E87','#00B796', '#00D2F1', '#FEBE00', '#FF5656'];

export default class InitialPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        paused:true
      }
  }
  componentWillUnmount (){
      if (this._confettiView)
          this._confettiView.stopConfetti();
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.currentIndex === 4){
      this._confettiView.startConfetti()
    }
  }

  handleThatTho = () => {
    const { handleAccountSetupComplete } = this.props;
    this.player.presentFullscreenPlayer();
    this.setState({paused:false})
    handleAccountSetupComplete()
  }

  render() {
    const { handleAccountSetupComplete, user, currentIndex } = this.props;
    
    return(
      <View>
        <View style={{zIndex:1}}>
          <Confetti ref={(node) => this._confettiView = node} colors={colors} confettiCount={200}/> 
        </View>
        <View style={{alignItems: 'center', marginTop: '25%'}}><Text style={styles.pageTitle}>Congratulations!</Text></View>
        <View style={{marginTop: '17%'}}>
        <Text style={styles.text}>You have officially completed the account setup process. Please use and enjoy JBUM safely.</Text>
        <View style={{marginTop: 40}}/>
        <Text style={styles.usernameText}>Your randomized username: {user? user.username:''}</Text>
        <View style={{marginTop: 100}}>
          <Button
            backgroundColor={'#4AD9B9'}
            onPress={this.handleThatTho}
            icon={{name: 'directions-walk'}}
            textStyle={{fontSize: 22, color: 'white'}}
            title='View Tutorial & Get Started' />
        </View>
        <Video source={vid}   // Can be a URL or a local file.
          ref={(ref) => {
            this.player = ref
          }}                                      // Store reference
          rate={1.0}                              // 0 is paused, 1 is normal.
          volume={1.0}                            // 0 is muted, 1 is normal.
          muted={false}                           // Mutes the audio entirely.
          paused={this.state.paused}                          // Pauses playback entirely.
          resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
          playInBackground={false}                // Audio continues to play when app entering background.
          playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
          ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
          progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
          onEnd={()=> this.setState({paused:true})}
         />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  usernameText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  pageTitle: {
    color: '#fff',
    fontSize: 37,
    fontWeight: 'bold',
  },
});
