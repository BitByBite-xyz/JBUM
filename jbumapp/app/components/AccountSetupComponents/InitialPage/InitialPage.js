import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import Picker from 'react-native-picker';

const data = [];
const genderOptions = ['Male', 'Female', 'Transgender', 'Gender Fluid', 'Other'];
const sexualityOptions = ['Heterosexual', 'Homosexual', 'Bisexual', 'Asexual', 'Pansexual', 'Other']

export default class InitialPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAge: "",
      selectedGender: '',
      selectedSexuality: '',
      showAge:false
    };

    //Seeding Age options

    for (i = 0; i < 30; i++) {
      data.push(""+i);
    }
  }
  onPressAge = () => {
    const selectedAge = this.state;
    Picker.init({
        pickerData: data,
        selectedValue: [59],
        onPickerConfirm: data => {
          this.setState(previousState => {
            return { selectedAge: data, showAge: true };
          });
        },
        onPickerCancel: data => {
            console.log(data);
            Picker.hide();
        },
        onPickerSelect: data => {
            console.log(data);
        }
    });
    Picker.show();

  }
  render() {
    const selectedAge = this.state;
    let displayAge = this.state.showAge ? 'Age:' + this.state.selectedAge : 'Tap to select Age';
    return(
      <View>
        <View style={{alignItems: 'center', marginTop: '45%'}}><Text style={styles.pageTitle}>Account Setup</Text></View>
        <View style={{marginTop: '17%'}}>
            <Text style={styles.text}>All of the following information you enter will be completely anonymous. Please do you best to fill out the account setup questions.</Text>
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
    fontSize: 22,
    fontWeight: '600',
  },
  pageTitle: {
    color: '#fff',
    fontSize: 45,
    fontWeight: 'bold',
  },
});