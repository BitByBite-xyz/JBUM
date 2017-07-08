import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';


const AskPage = (props) => {
  const { title, body,updateState, postButton } = props;




  return (
    <View style={styles.backdrop}>
      <View style={styles.dropdown}>
        <View style={styles.selectors}>
          <View style={styles.dropdownBackground}>
            <ModalDropdown textStyle={styles.selectorText} defaultValue={'Categories  ∨'} options={['Abuse', 'Sexual orientation', 'School', 'Other']} />
          </View>
        </View>
      <View style={styles.selectors}>
        <View style={styles.dropdownBackground}>
          <ModalDropdown textStyle={styles.selectorText} defaultValue={'Receiver  ∨'} options={['Students', 'Therapist', 'Anyone']} />
        </View>
      </View>
      <View>
        <TouchableOpacity activeOpacity={0.4} onPress={this.onPressButton}>
          <View style={styles.dropdownBackground}>
            <Text style={styles.addTags}>Add Tags</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.bottomBox}>
      <View style={styles.bottom}>
        <View style={styles.views}>
          <TextInput
              style={styles.smallText}
              placeholder='Your Question&#39;s Title'
              returnKeyType='next'
              placeholderTextColor='#BBB'
              underlineColorAndroid='transparent'
              onChangeText={(title) => updateState({ title })}
              autoCorrect={true}
              placeholderTextColor={'black'}
              />
              <View style={styles.lineDivider} />
        </View>
        <View style={styles.views}>
          <TextInput
              style={styles.largeText}
              placeholder='Tell us your question...'
              returnKeyType='done'
              placeholderTextColor='#BBB'
              underlineColorAndroid='transparent'
              onChangeText={(body) => updateState({ body })}
              multiline={true}
              blurOnSubmit={true}
              placeholderTextColor={'black'}
              autoCorrect={true}
              />
          </View>
        <View style={styles.button}>
        <View style={styles.lineDivider}/>
          <Button color={'#BABABA'} title={'Ask Question'} onPress={postButton} />
        </View>
      </View>
    </View>
  </View>
  );
};



export default AskPage;
const styles = {
    backdrop: {
        backgroundColor: '#F3F3F3',
        flex: 1,
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
        paddingTop: 15,
        paddingLeft: 12,
        paddingRight: 12,
        //Also padding-bottom can be added too
        // This can be changed to add a divider between the boxes; change to E5E5E5

    },

    button: {
        paddingBottom: 10,
        paddingTop: 15,
        paddingLeft: 17
    },
    smallText: {
        height: 50,
        color: '#BBB',
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'Avenir-Book'

    },
    largeText: {
        height: 300,
        color: '#BBB',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15,
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
    dropdownBackground: {
      borderRadius: 20,
      backgroundColor: 'white',
      paddingLeft: 15,
      paddingRight: 15,
    },
    addTags: {
      fontSize: 14,
      fontFamily: 'Avenir',
      color: '#BABABA',
      padding: 3.5
    }
}
