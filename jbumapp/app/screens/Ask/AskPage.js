import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import {Select, Option} from "react-native-chooser"


const AskPage = (props) => {
  const { title, body,updateState, postButton } = props;




  return (
    <View style={styles.backdrop}>
      <View style={styles.dropdown}>
        <View style={styles.selectors}>
            <Select
              defaultText  = "Category"
              style = {{borderWidth : 1, borderColor : "transparent", height: 26, width: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 12, backgroundColor: 'white'}}
              textStyle = {{color: '#BABABA', fontFamily: 'Avenir', fontSize: 15}}
              backdropStyle  = {{backgroundColor : "#e5e5e5"}}
              optionListStyle = {{backgroundColor : "#F5FCFF", borderRadius: 12, borderColor : "transparent", shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: .3}}
            >
              <Option value = {{name : "Family"}}>Family</Option>
              <Option value = "Friendships">Friendships</Option>
              <Option value = "Relationships">Relationships</Option>
              <Option value = "Bullying">Bullying</Option>
              <Option value = "Drugs">Drugs</Option>
              <Option value = "Abuse">Abuse</Option>
              <Option value = "Eating-Disorder">Eating Disorder</Option>
              <Option value = "Religion">Religion</Option>
              <Option value = "Discrimination">Discrimination</Option>
              <Option value = "Sexuality">Sexuality</Option>
              <Option value = "Sickness">Sickness</Option>
              <Option value = "Other">Other</Option>
            </Select>
        </View>
      <View style={styles.selectors}>
          <Select
            defaultText  = "Reciever"
            style = {{borderWidth : 1, borderColor : "transparent", height: 26, width: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 12, backgroundColor: 'white'}}
            textStyle = {{color: '#BABABA', fontFamily: 'Avenir', fontSize: 15}}
            backdropStyle  = {{backgroundColor : "#e5e5e5"}}
            optionListStyle = {{backgroundColor : "#F5FCFF", borderRadius: 12, borderColor : "transparent", shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: .3}}
          >
            <Option value = {{name : "Student"}}>Student</Option>
            <Option value = "Teacher">Teacher</Option>
            <Option value = "Tharapist">Tharapist</Option>
            <Option value = "Any">Any</Option>
          </Select>
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
              maxLength={73}
              returnKeyType='next'
              underlineColorAndroid='transparent'
              onChangeText={(title) => updateState({ title })}
              autoCorrect={true}
              placeholderTextColor={'#c9c9c9'}
              />
              <View style={styles.lineDivider} />
        </View>
        <View style={styles.views}>
          <TextInput
              style={styles.largeText}
              placeholder='Tell us your question...'
              returnKeyType='done'
              underlineColorAndroid='transparent'
              onChangeText={(body) => updateState({ body })}
              multiline={true}
              blurOnSubmit={true}
              placeholderTextColor={'#c9c9c9'}
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
    dropDown: {
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
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
      borderTopColor: '#DBD9D9',
      borderTopWidth: .5,
      paddingLeft: 10,
      paddingRight: 10,
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
