import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

export default class AskPage extends Component {
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
        <View style={styles.bottomBox}>
          <View style={styles.bottom}>
            <View style={styles.views}>
              <TextInput
                  style={styles.largeText}
                  placeholder='Have a question?'
                  returnKeyType='next'
                  placeholderTextColor='#DBD9D9'
                  underlineColorAndroid='transparent'
                  multiline={true}
                  autoCorrect={false}
                  />
              </View>
            <View style={styles.button}>
            <View style={styles.lineDivider}/>
              <Button fontSize={'12'} color={'#BABABA'} title={'Ask Question'} onPress={this.onPressButton} />
            </View>
          </View>
          <View style={styles.bottomPadding} />
        </View>
      </View>
    );
  }
}
const styles = {
    backdrop: {
        backgroundColor: '#F3F3F3',
        flex: 1,
    },
    bottomPadding: {
        height: 6
    },
    logo: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontFamily: 'Avenir',
        fontSize: 17
    },
    textBold: {
        color: 'black',
        fontFamily: 'Avenir',
        fontSize: 17,
        fontWeight: 'bold'
    },
    bottom: {
        backgroundColor: 'white',
        borderRadius: 5,
    },
    bottomBox: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#F3F3F3',
    },
    views: {
        paddingTop: 8,
        paddingLeft: 12,
        paddingRight: 12,
        //Also padding-bottom can be added too
        // This can be changed to add a divider between the boxes; change to E5E5E5
    },

    button: {
        paddingBottom: 10,
        paddingTop: 15,
        paddingLeft: 17,
        fontSize: 10
    },
    smallText: {
        height: 40,
        color: '#BABABA',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Avenir-Book'

    },
    largeText: {
        height: 60,
        color: '#BABABA',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 17,
        fontFamily: 'Avenir',

    },
    lineDivider: {
      width: 320,
      color: '#BABABA',
      borderTopColor: '#DBD9D9',
      borderTopWidth: .5,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 15
    },
    dropdown: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        flex: 0
    },
    selectors: {
      margin: 8,
    },
    selectorText: {
      fontFamily: 'Avenir',
      color: '#BABABA',
      fontSize: 14,
      margin: 4
    },
    plsWork: {
      borderRadius: 20,
      backgroundColor: 'white',
      paddingLeft: 15,
      paddingRight: 15
    },
}
