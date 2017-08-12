import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import SimplePicker from 'react-native-simple-picker';

const parOptions = ['Biological Mother and Father', 'Biological Mother', 'Biological Father', 'Biological Mother and Stepfather or another Male',
'Biological Father and Stepmother or another woman', 'Aunt or Uncle', 'Grandparents', 'Guardian mother and father', 'Guardian Mother', 'Guardian Father',
'Older Sibling', 'Other'];
const sibOptions = ['0', '1', '2', '3', '4', '5', '6', 'More than 6'];
const sibOrderOptions = ['Oldest', 'Middle Child', 'Youngest'];

export default class PageThree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slectedParentals: '',
      selectedSiblings: '',
      selectedSiblingOrder: '',
    };
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

            Which parents or guardians do you live with?
          </Text>

          <Text>{this.state.selectedParentals}</Text>

          <SimplePicker
            ref={'picker'}
            options={parOptions}
            onSubmit={(parOptions) => {
              this.setState({
                selectedParentals: parOptions,
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

            How many siblings do you have?
          </Text>

          <Text>{this.state.selectedSiblings}</Text>

          <SimplePicker
            ref={'picker2'}
            options={sibOptions}
            onSubmit={(sibOptions) => {
              this.setState({
                selectedSiblings: sibOptions,
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

            What generation are you that has lived in the US
          </Text>

          <Text>{this.state.selectedSiblingOrder}</Text>

          <SimplePicker
            ref={'picker3'}
            options={sibOrderOptions}
            onSubmit={(sibOrderOptions) => {
              this.setState({
                selectedSiblingOrder: sibOrderOptions,
              });
            }}
          />


        </View>

      </View>
    );
  }
};
