import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Platform,
  Dimensions
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
        paused:true,
        hasViewed: false

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
    const { handleShowVidAndContinue } = this.props;
    //this.player.presentFullscreenPlayer();
    handleShowVidAndContinue()
    this.setState({hasViewed:true})
  }

  render() {
    const { hasViewed } = this.state;    
    const { handleAccountSetupComplete, user, currentIndex, goToHome } = this.props;
    //alert(Dimensions.get('window').height)
    
    return(
      <View>
        <View style={{zIndex:1}}>
          <Confetti ref={(node) => this._confettiView = node} colors={colors} confettiCount={200}/> 
        </View>
        <View style={{alignItems: 'center', marginTop: '15%'}}><Text style={styles.pageTitle}>Congratulations!</Text></View>
        <View style={{marginTop: Dimensions.get('window').height < 570 ? '10%':'40%'}}>
          <Text style={styles.text}>You have officially completed the account setup process. Please use and enjoy JBUM safely.</Text>
        <View style={{marginTop: 40}}/>
        <Text style={styles.usernameText}>Your randomized username: {user? user.username:''}</Text>
        <View style={{marginTop: Dimensions.get('window').height < 570 ? '20%':'50%'}}>
          {hasViewed ? 
              <Button
                backgroundColor={'#6A1B9A'}
                onPress={() => goToHome()}
                icon={{name: 'directions-walk'}}
                textStyle={{fontSize: Dimensions.get('window').height < 570 ? 14: 22, color: 'white'}}
                title='Get Started'
                buttonStyle={{borderRadius:9}} /> :
              <Button
                backgroundColor={'#f44336'}
                onPress={this.handleThatTho}
                icon={{name: 'ondemand-video'}}
                textStyle={{fontSize: Dimensions.get('window').height < 570 ? 14: 22, color: 'white'}}
                title='View Tutorial'
                buttonStyle={{borderRadius:9}} />
          }
        </View>
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
    fontSize: Dimensions.get('window').height < 570 ? 30: 34,
    fontWeight: 'bold',
  },
});
