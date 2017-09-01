import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import Picker from 'react-native-picker';

const ageOptions = [];
const genderOptions = ['Male', 'Female', 'Transgender', 'Gender Fluid', 'Other'];
const sexualityOptions = ['Heterosexual', 'Homosexual', 'Bisexual', 'Asexual', 'Pansexual', 'Other']
const genOptions = ['Yes', 'No'];
const ethOptions = ['Caucasian', 'Black or African American', 'Hispanic and or Latino', 'Asian', 'Pacific Islander', 'American Indian', 'Don\'t Know'];

export default class PageOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAge: "",
      showAge:false,
      selectedGender: '',
      selectedSexuality: '',
      selectedGeneration: '',
      selectedEthnicity: '',
      showEthnicity: false,
      showGeneration: false,
      showAge:false,
      showGender:false,
      showSexuality: false,
      hasValidData:false
    };

    //Seeding Age options
    //S


    if (ageOptions.length === 0) {
      for (i = 8; i < 25; i++) {
        ageOptions.push(""+i);
      }
    }


  }

  validateData = () => {
    if (this.state.showAge &&
        this.state.showGender &&
        this.state.showSexuality &&
        this.state.showEthnicity &&
        this.state.showGeneration &&
        !this.state.hasValidData) {
          this.state.hasValidData = true;
          this.props.handlePageComplete();

    }

  }

  //Age
  onPressAge = () => {
    const selectedAge = this.state;
    const {handleAddData} = this.props;
    Picker.init({
        pickerTitleText: 'Select Age',
        pickerConfirmBtnText: 'Confirm',
        pickerCancelBtnText: 'Cancel',
        pickerData: ageOptions,
        onPickerConfirm: data => {
          this.setState(previousState => {
            return { selectedAge: data, showAge: true };
          });
          handleAddData('Age',data);
          this.validateData();
        },
        onPickerCancel: data => {
          this.setState(previousState => {
            return { selectedAge: '', showAge: false };
          });
          Picker.hide();
        },
        onPickerSelect: data => {
          this.setState(previousState => {
            return { selectedAge: data, showAge: true };
          });
        }
    });
    Picker.show();
  }
  //Gender
  onPressGender = () => {
    const selectedGender = this.state;
    const {handleAddData} = this.props;

    Picker.init({
        pickerTitleText: 'Select Gender',
        pickerConfirmBtnText: 'Confirm',
        pickerCancelBtnText: 'Cancel',
        pickerData: genderOptions,
        selectedValue: [],
        onPickerConfirm: data => {
          this.setState(previousState => {
            return { selectedGender: data, showGender: true };
          });
          handleAddData('Gender',data);
          this.validateData();
        },
        onPickerCancel: data => {
          this.setState(previousState => {
            return { selectedGender: '', showGender: false };
          });
          Picker.hide();
        },
        onPickerSelect: data => {
          this.setState(previousState => {
            return { selectedGender: data, showGender: true };
          });
        }
    });
    Picker.show();
  }
  //Sexuality
  onPressSexuality = () => {
    const selectedSexuality = this.state;
    const {handleAddData} = this.props;

    Picker.init({
        pickerTitleText: 'Select Sexuality',
        pickerData: sexualityOptions,
        selectedValue: [],
        onPickerConfirm: data => {
          this.setState(previousState => {
            return { selectedSexuality: data, showSexuality: true };
          });
          handleAddData('Sexuality',data);
          this.validateData();
        },
        onPickerCancel: data => {
          this.setState(previousState => {
            return { selectedSexuality: '', showSexuality: false };
          });
          Picker.hide();
        },
        onPickerSelect: data => {
          this.setState(previousState => {
            return { selectedSexuality: data, showSexuality: true };
          });
        }
    });
    Picker.show();
  }

  //Ethnicicty
  onPressEthnicity = () => {
    const selectedEthnicity = this.state;

    const {handleAddData} = this.props;

    Picker.init({
        pickerTitleText: 'Select Ethnicicty',
        pickerConfirmBtnText: 'Confirm',
        pickerCancelBtnText: 'Cancel',
        pickerData: ethOptions,
        selectedValue: [],
        onPickerConfirm: data => {
          this.setState(previousState => {
            return { selectedEthnicity: data, showEthnicity: true };
          });
          handleAddData('Ethnicicty',data);
          this.validateData();
        },
        onPickerCancel: data => {
            console.log(data);
            Picker.hide();
        },
        onPickerSelect: data => {
          this.setState(previousState => {
            return { selectedEthnicity: data, showEthnicity: true };
          });
        }
    });
    Picker.show();
  }
  //Generation
  onPressGeneration = () => {
    const selectedGeneration = this.state;
    const {handleAddData} = this.props;

    Picker.init({
        pickerTitleText: 'Select answer',
        pickerConfirmBtnText: 'Confirm',
        pickerCancelBtnText: 'Cancel',
        pickerData: genOptions,
        selectedValue: [],
        onPickerConfirm: data => {
          this.setState(previousState => {
            return { selectedGeneration: data, showGeneration: true };
          });
          handleAddData('Generation',data);
          this.validateData();
        },
        onPickerCancel: data => {
            console.log(data);
            Picker.hide();
        },
        onPickerSelect: data => {
          this.setState(previousState => {
            return { selectedGeneration: data, showGeneration: true };
          });
        }
    });
    Picker.show();
  }

  render() {
    const displayAge = this.state.showAge ? 'Your Age: ' + this.state.selectedAge : 'Please Select Your Age';
    const displayGender = this.state.showGender ? 'Your Gender: ' + this.state.selectedGender : 'Please Select Your Gender';
    const displaySexuality = this.state.showSexuality ? 'Your Sexuality: ' + this.state.selectedSexuality : 'Please Select Your Sexuality';
    const displayEthnicity = this.state.showEthnicity ? 'Ethnicicty: ' + this.state.selectedEthnicity : 'Select Ethnicicty';
    const displayGeneration = this.state.showGeneration ? 'Parents Born in the US: ' + this.state.selectedGeneration : 'Was one or both of your parent(s)/guardian(s) born in the United States?';

    return(
      <View>
        <View style={{alignItems: 'center', marginTop: '10%'}}><Text style={styles.pageTitle}>Basic Info</Text></View>
        <View style={{marginTop: '25%'}}>
            <View>
              <TouchableHighlight onPress={this.onPressAge} underlayColor={'transparent'}>
                <Text style={styles.text}>{displayAge}</Text>
              </TouchableHighlight>
            </View>
            <View style={{marginTop: '17%'}}>
              <TouchableHighlight onPress={this.onPressGender} underlayColor={'transparent'}>
                <Text style={styles.text}>{displayGender}</Text>
              </TouchableHighlight>
            </View>
            <View style={{marginTop: '17%'}}>
            <TouchableHighlight onPress={this.onPressSexuality} underlayColor={'transparent'}>
              <Text style={styles.text}>{displaySexuality}</Text>
            </TouchableHighlight>
            </View>
            <View style={{marginTop: '17%'}}>
              <TouchableHighlight onPress={this.onPressEthnicity} underlayColor={'transparent'}>
                <Text style={styles.text}>{displayEthnicity}</Text>
              </TouchableHighlight>
            </View>
            <View style={{marginTop: '17%'}}>
              <TouchableHighlight onPress={this.onPressGeneration} underlayColor={'transparent'}>
                <Text style={styles.text}>{displayGeneration}</Text>
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  pageTitle: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
