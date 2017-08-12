import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';

import SimplePicker from 'react-native-simple-picker';

const genOptions = ['1st Generation', '2nd Generation', '3rd Generation', '4th Generation', '5th Generation'];
const ethOptions = ['Caucasian', 'Black or African American', 'Hispanic and or Latino', 'Asian', 'Pacific Islander', 'American Indian']

export default class PageTwo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholder: 'Enter your city of birth',
      selectedGeneration: '',
      selectedEthnicity: '',
    };
  }
  render() {
    return(
      <View>
        <TextInput
          style={{height: 60, borderColor: 'gray', borderWidth: 3, width: 200}}
          onChangeText={(placeholder) => this.setState({placeholder})}
          value={this.state.placeholder}
        />

        <View>

          <Text
            onPress={() => {
              this.refs.picker.show();
            }}
          >

            What generation are you that has lived in the US
          </Text>

          <Text>{this.state.selectedGeneration}</Text>

          <SimplePicker
            ref={'picker'}
            options={genOptions}
            onSubmit={(genOptions) => {
              this.setState({
                selectedGeneration: genOptions,
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

            Which ethnicity describes you most accurately?
          </Text>

          <Text>{this.state.selectedEthnicity}</Text>

          <SimplePicker
            ref={'picker2'}
            options={ethOptions}
            onSubmit={(ethOptions) => {
              this.setState({
                selectedEthnicity: ethOptions,
              });
            }}
          />


        </View>

      </View>
    );
  }
};
