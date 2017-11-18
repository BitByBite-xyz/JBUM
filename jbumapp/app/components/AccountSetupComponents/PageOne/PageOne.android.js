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
const genOptions = ['Same as primary', 'African', 'European', 'Central Asian, Far East Asian', 'Hispanic/Latino/Spanish', 'Indian Subcontinent',' Middle-Eastern', 'Native American', 'North Asian', 'Oceania', 'Pacific Islander/Hawaiian', 'Southeast Asian', 'West Asian'];
const ethOptions = ['African', 'Asian', 'American', 'European', 'Hispanic/Latino/Spanish',' Middle-Eastern', 'Native American', 'Oceania', 'Pacific Islander/Hawaiian'];

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
        pickerTitleText: 'Age',
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
        pickerConfirmBtnText: 'Confirm',
        pickerCancelBtnText: 'Cancel',
        pickerData: sexualityOptions,
        selectedValue: [],
        wheelFlex: [2, 1, 1, 2, 1, 1],
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
       // pickerFontSize: 12,
        selectedValue: [],
        onPickerConfirm: data => {
          this.setState(previousState => {
            return { selectedGeneration: data, showGeneration: true };
          });
          handleAddData('Secondary Ethnicicty',data);
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
    const displayAge = this.state.showAge ? 'Your Age: ' + this.state.selectedAge : 'Select Your Age';
    const displayGender = this.state.showGender ? 'Your  Gender Identity: ' + this.state.selectedGender : 'Select Your Gender Identity';
    const displaySexuality = this.state.showSexuality ? 'Your Sexual Orientation: ' + this.state.selectedSexuality : 'Select Your Sexual Orientation';
    const displayEthnicity = this.state.showEthnicity ? 'Primary Ethnic Identity: ' + this.state.selectedEthnicity : 'Select Your Primary Ethnic Identity';
    const displayGeneration = this.state.showGeneration ? 'Secondary Ethnic Identity: ' + this.state.selectedGeneration : 'Select Your Secondary Ethnic Identity';

    return(
      <View style={{flex:1}}>
        <View style={{alignItems: 'center', marginTop: '5%'}}><Text style={styles.pageTitle}>Basic Info</Text></View>
        <View style={{marginTop: '10%'}}>
            <View>
              <TouchableHighlight onPress={this.onPressAge} underlayColor={'transparent'}>
                <Text style={styles.text}>{displayAge}</Text>
              </TouchableHighlight>
            </View>
            <View style={{marginTop: '13%'}}>
              <TouchableHighlight onPress={this.onPressGender} underlayColor={'transparent'}>
                <Text style={styles.text}>{displayGender}</Text>
              </TouchableHighlight>
            </View>
            <View style={{marginTop: '13%'}}>
            <TouchableHighlight onPress={this.onPressSexuality} underlayColor={'transparent'}>
              <Text style={styles.text}>{displaySexuality}</Text>
            </TouchableHighlight>
            </View>
            <View style={{marginTop: '13%'}}>
              <TouchableHighlight onPress={this.onPressEthnicity} underlayColor={'transparent'}>
                <Text style={styles.text}>{displayEthnicity}</Text>
              </TouchableHighlight>
            </View>
            <View style={{marginTop: '13%'}}>
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  pageTitle: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
