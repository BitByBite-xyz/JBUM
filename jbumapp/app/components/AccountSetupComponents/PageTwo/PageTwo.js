import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import Picker from 'react-native-picker';

const genOptions = ['1st Generation', '2nd Generation', '3rd Generation', '4th Generation', '5th Generation'];
const ethOptions = ['Caucasian', 'Black or African American', 'Hispanic and or Latino', 'Asian', 'Pacific Islander', 'American Indian', 'Don\'t Know'];
const citizenshipOptions = ['Born in the U.S.', 'Born outside the U.S.', 'Mirgrated to U.S.'];

export default class PageTwo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholder: 'Enter your city of birth',
      selectedGeneration: '',
      selectedEthnicity: '',
      showEthnicity: false,
      showGeneration: false,
      showCitizenship:false,
      hasValidData:false
    };
  }
  validateData = () => {
    if (this.state.showEthnicity &&
        this.state.showGeneration &&
        this.state.showCitizenship &&
        !this.state.hasValidData) {
          this.state.hasValidData = true;
          this.props.handlePageComplete();
    }
  }
  //Ethnicicty
  onPressEthnicity = () => {
    Picker.init({
        pickerTitleText: 'Select Ethnicicty',
        pickerData: ethOptions,
        selectedValue: [],
        onPickerConfirm: ethOptions => {
          this.setState(previousState => {
            return { selectedEthnicity: ethOptions, showEthnicity: true };
          });
          this.validateData();
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
  //Generation
  onPressGeneration = () => {
    const selectedGeneration = this.state;
    Picker.init({
        pickerTitleText: 'Select Generation',
        pickerData: genOptions,
        selectedValue: [],
        onPickerConfirm: genOptions => {
          this.setState(previousState => {
            return { selectedGeneration: genOptions, showGeneration: true };
          });
          this.validateData();
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
  //Citizenship
  onPressCitizenship = () => {
    const selectedCitizenship = this.state;
    Picker.init({
        pickerTitleText: 'Select Citizenship',
        pickerData: citizenshipOptions,
        selectedValue: [],
        onPickerConfirm: citizenshipOptions => {
          this.setState(previousState => {
            return { selectedCitizenship: citizenshipOptions, showCitizenship: true };
          });
          this.validateData();
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
    const displayEthnicity = this.state.showEthnicity ? 'Ethnicicty: ' + this.state.selectedEthnicity : 'Select Ethnicicty';
    const displayGeneration = this.state.showGeneration ? 'Generation: ' + this.state.selectedGeneration : 'Select Generation';
    const displayCitizenship = this.state.showCitizenship ? 'Citizenship: ' + this.state.selectedCitizenship : 'Select Citizenship';
    return(
      <View>
        <View style={{alignItems: 'center', marginTop: '10%'}}><Text style={styles.pageTitle}>Identity</Text></View>
        <View style={{marginTop: '35%'}}>
            <View>
              <TouchableHighlight onPress={this.onPressEthnicity} underlayColor={'transparent'}>
                <Text style={styles.text}>{displayEthnicity}</Text>
              </TouchableHighlight>
            </View>
            <View style={{marginTop: '17%'}}>
              <TouchableHighlight onPress={this.onPressGeneration} underlayColor={'transparent'}>
                <Text style={styles.text}>{displayGeneration}</Text>
              </TouchableHighlight>
            </View>
            <View style={{marginTop: '17%'}}>
            <TouchableHighlight onPress={this.onPressCitizenship} underlayColor={'transparent'}>
              <Text style={styles.text}>{displayCitizenship}</Text>
            </TouchableHighlight>
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  pageTitle: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
  },
});
