import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity,Picker,Alert } from 'react-native';
import { Button,CheckBox } from 'react-native-elements'

import Meteor, { createContainer } from 'react-native-meteor';
import Accordion from 'react-native-collapsible/Accordion';

import styles from './styles'

const SECTIONS = [
  {
    title: '🌀 Reciever 🌀',
  },
  {
    title: 'Second',
  }
];

class Ask extends Component {
  constructor(props) {
    super(props);


    this.state = {
      title: '',
      body: '',
      post_visibility:["Therapist"],
      error: null,
      checked:false,
    };
  }

  postButton = () => {
    const {title, body,post_visibility} = (this.state)

    if (title.length === 0 || body.length === 0){
      Alert.alert(
        'Oops',
        'You forgot to fill everything out!'
      );
    }
    else {
      const params = {
        title:title,
        body: body,
        post_visibility:post_visibility

      }
      Meteor.call('Posts.insert', params, (err) => {
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

  renderHeader = (section) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  }

  renderContent = (section) => {
    if (section.title.includes('Reciever')) {
      return (
        <View style={styles.content}>
          <CheckBox
            title='Click Here'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
            onPress={() => {
              this.setState(previousState => {
                return { checked: !previousState.checked };
              });}}
          />
        </View>
      );

    }

    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
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
            <Accordion
              sections={SECTIONS}
              renderHeader={this.renderHeader}
              renderContent={this.renderContent}
              touchableProps={{activeOpacity:1}}
            />




          <Button
            borderRadius={25}
            containerViewStyle={{marginTop:10}}
            backgroundColor={'white'}
            //disabled={title.length !== 0 && body.length !== 0}
            icon={{name: 'send', color: '#BBB', size: 20}}
            iconRight
            title='Submit Question'
            textStyle={{color:'#BBB', fontFamily: 'Avenir', fontSize: 18}}
            onPress={() => this.postButton()}/>
        </View>
      </View>
    );
  }
}
Ask.propTypes = {
  navigator: React.PropTypes.object,
  title: React.PropTypes.string,
  body: React.PropTypes.string
};

export default Ask;
