import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';

import SimplePicker from 'react-native-simple-picker';


const options = [];
const genderOptions = ['Male', 'Female', 'Transgender', 'Gender Fluid', 'Other'];
const sexualityOptions = ['Heterosexual', 'Homosexual', 'Bisexual', 'Asexual', 'Pansexual', 'Other']

export default class PageOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAge: '',
      selectedGender: '',
      selectedSexuality: '',
    };

    //Seeding Age options

    for (i = 0; i < 30; i++) {
      options.push(i);
    }
  }
  render() {
    return(
      <View>
          <View>
            <Text
              onPress={() => {
                this.refs.picker.show();
              }}
            >
              Age
            </Text>

            <Text>{this.state.selectedAge}</Text>

            <SimplePicker
              ref={'picker'}
              options={options}
              onSubmit={(options) => {
                this.setState({
                  selectedAge: options,
                });
              }}
            />


          </View>

          <View>
            <Text
              onPress={() => {
                this.refs.picker2.show();
              }}
            >
              Gender
            </Text>

            <Text>{this.state.selectedGender}</Text>

            <SimplePicker
              ref={'picker2'}
              options={genderOptions}
              onSubmit={(genderOptions) => {
                this.setState({
                  selectedGender: genderOptions,
                });
              }}
            />


          </View>

          <View>
            <Text
              onPress={() => {
                this.refs.picker3.show();
              }}
            >
              Sexuality
            </Text>

            <Text>{this.state.selectedSexuality}</Text>

            <SimplePicker
              ref={'picker3'}
              options={sexualityOptions}
              onSubmit={(sexualityOptions) => {
                this.setState({
                  selectedSexuality: sexualityOptions,
                });
              }}
            />


          </View>

    </View>
    );
  }
};
