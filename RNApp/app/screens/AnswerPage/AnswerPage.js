import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

import styles from './styles'


export default class AnswerPage extends Component {
  constructor(props) {
      super(props);
      this.state = ({
          question: '',
          description: '',
          selectedTab: ''

      });
  }
  onPressButton() {

  }
  render() {
      return (

        <View style={styles.backdrop}>
          <View style={styles.dropdown}>


        </View>

        <View style={styles.bottomBox}>
          <View style={styles.bottom}>

            <View style={styles.views}>
              <TextInput
                  style={styles.largeText}
                  placeholder='Answer Question Here...'
                  returnKeyType='next'
                  placeholderTextColor='#DBD9D9'
                  underlineColorAndroid='transparent'
                  multiline={true}
                  autoCorrect={false}
                   />
              </View>
            <View style={styles.button}>
            <View style={styles.lineDivider}/>
              <Button color={'#BABABA'} title={'Answer Question'} onPress={this.onPressButton} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
