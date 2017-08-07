import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity,Picker,Alert } from 'react-native';
import { Button } from 'react-native-elements'

import Ask from './Ask';
import Meteor, { createContainer } from 'react-native-meteor';

import styles from './styles'
class AskContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      error: null,
    };
  }

  postButton = () => {
    const {title, body} = (this.state)

    if (title.length === 0 || body.length === 0){
      Alert.alert(
        'Oops',
        'You forgot to fill everything out!'
      );
    }
    else {
      Meteor.call('Posts.insert', title,body, (err) => {
        if (err) {
          console.log("Post err"+err.details);
          Alert.alert(
            'Oops! Screenshot this and send to support!',
            'Server error: \n\n'+err.details
          );
          return;
        } else {
          console.log("Post added");
          this.props.navigation.goBack();
        }
      });
    }


  }

  render() {
    const title = this.state.title;
    const body = this.state.body;

    return (
      <View style={styles.backdrop}>
        <View style={styles.bottomBox}>
          <View style={styles.bottom}>
            <View style={styles.views}>
              <TextInput
                  style={styles.largeText}
                  placeholder='Your Question&#39;s Title'
                  maxLength={73}
                  returnKeyType='next'
                  underlineColorAndroid='transparent'
                  onChangeText={(title) => this.setState({ title })}
                  autoCorrect={true}
                  placeholderTextColor={'#c9c9c9'}
                  />
                  <View style={styles.lineDivider} />
            </View>
            <View style={styles.views}>
              <TextInput
                  style={styles.smallText}
                  placeholder='Tell us your question...'
                  returnKeyType='done'
                  underlineColorAndroid='transparent'
                  onChangeText={(body) => this.setState({ body })}
                  multiline={true}
                  blurOnSubmit={true}
                  placeholderTextColor={'#c9c9c9'}
                  autoCorrect={true}
                  />
              </View>
          </View>

          <Button
            containerViewStyle={{paddingTop:10}}
            backgroundColor={'#BABABA'}
            //disabled={title.length !== 0 && body.length !== 0}
            icon={{name: 'phonelink-ring'}}
            title='Submit Question'
            onPress={() => this.postButton()}/>
        </View>
      </View>
    );
  }
}
AskContainer.propTypes = {
  navigator: React.PropTypes.object,
  title: React.PropTypes.string,
  body: React.PropTypes.string
};

export default AskContainer;
