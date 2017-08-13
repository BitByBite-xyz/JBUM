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

export default class PageOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAge: "",
      showAge:false,
      selectedGender: '',
      selectedSexuality: '',
      showAge:false,
      showGender:false,
      showSexuality: false
    };

    /*Meteor.call('UserData.insert', 'huirueoh','uh', (err) => {
      if (err) {
        console.log("Post err"+err.details);
        Alert.alert(
          'Oops! Screenshot this and send to support!',
          'Server error: \n\n'+err.details
        );
        return;
      } else {
        console.log("UserData added");
      }
    });*/

    //Seeding Age options

    for (i = 8; i < 25; i++) {
      ageOptions.push(""+i);
    }
  }
  //Age
  onPressAge = () => {
    const selectedAge = this.state;
    Picker.init({
        pickerTitleText: 'Select Age',
        pickerData: ageOptions,
        onPickerConfirm: data => {
          this.setState(previousState => {
            return { selectedAge: data, showAge: true };
          });
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
    Picker.init({
        pickerTitleText: 'Select Gender',
        pickerData: genderOptions,
        selectedValue: [],
        onPickerConfirm: data => {
          this.setState(previousState => {
            return { selectedGender: data, showGender: true };
          });
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
    Picker.init({
        pickerTitleText: 'Select Sexuality',
        pickerData: sexualityOptions,
        selectedValue: [],
        onPickerConfirm: data => {
          this.setState(previousState => {
            return { selectedSexuality: data, showSexuality: true };
          });
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
  //Citizenship
  onPressCitizenship = () => {
    const selectedCitizenship = this.state;
    Picker.init({
        pickerData: citizenshipOptions,
        selectedValue: [],
        onPickerConfirm: citizenshipOptions => {
          this.setState(previousState => {
            return { selectedCitizenship: citizenshipOptions, showCitizenship: true };
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
    const displayAge = this.state.showAge ? 'Age: ' + this.state.selectedAge : 'Select Age';
    const displayGender = this.state.showGender ? 'Gender: ' + this.state.selectedGender : 'Select Gender';
    const displaySexuality = this.state.showSexuality ? 'Sexuality: ' + this.state.selectedSexuality : 'Select Sexuality';
    return(
      <View>
        <View style={{alignItems: 'center', marginTop: '10%'}}><Text style={styles.pageTitle}>Ethnicicty</Text></View>
        <View style={{marginTop: '35%'}}>
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
    fontSize: 28,
    fontWeight: 'bold',
  },
  pageTitle: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
  },
});
