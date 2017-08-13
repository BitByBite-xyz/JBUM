import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import Picker from 'react-native-picker';

const parOptions = ['Live with both parents', 'Live with one parent', 'Live with relatives'];
const sibOptions = ['Only child', 'Have half/step siblings', 'Have brothers/sisters'];
const sibOrderOptions = ['Oldest', 'Middle Child', 'Youngest', 'No Siblings'];

export default class PageThree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slectedParentals: '',
      selectedSiblings: '',
      selectedSiblingOrder: '',
      showFamily: false,
      showSiblings: false,
      showSibOrder: false
    };
  }
  //Family
  onPressFamily = () => {
    const selectedFamily = this.state;
    Picker.init({
        pickerTitleText: 'Select Family',
        pickerData: parOptions,
        selectedValue: [],
        onPickerConfirm: parOptions => {
          this.setState(previousState => {
            return { selectedFamily: parOptions, showFamily: true };
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
  //Siblings
  onPressSiblings = () => {
    const selectedSiblings = this.state;
    Picker.init({
        pickerTitleText: 'Select Siblings',
        pickerData: sibOptions,
        selectedValue: [],
        onPickerConfirm: sibOptions => {
          this.setState(previousState => {
            return { selectedSiblings: sibOptions, showSiblings: true };
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
  //Birth Order
  onPressSibOrder = () => {
    const selectedSibOrder = this.state;
    Picker.init({
        pickerTitleText: 'Select Birth Order',
        pickerData: sibOrderOptions,
        selectedValue: [],
        onPickerConfirm: sibOrderOptions => {
          this.setState(previousState => {
            return { selectedSibOrder: sibOrderOptions, showSibOrder: true };
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
    const displayFamily = this.state.showFamily ? 'Family: ' + this.state.selectedFamily : 'Select Family';
    const displaySiblings = this.state.showSiblings ? 'Siblings: ' + this.state.selectedSiblings : 'Select Siblings';
    const displaySibOrder = this.state.showSibOrder ? 'Birth Order: ' + this.state.selectedSibOrder : 'Select Birth Order';
    return(
          <View>
            <View style={{alignItems: 'center', marginTop: '10%'}}><Text style={styles.pageTitle}>Relationships</Text></View>
            <View style={{marginTop: '35%'}}>
                <View>
                  <TouchableHighlight onPress={this.onPressFamily} activeOpacity={0}>
                    <Text style={styles.text}>{displayFamily}</Text>
                  </TouchableHighlight>
                </View>
                <View style={{marginTop: '17%'}}>
                  <TouchableHighlight onPress={this.onPressSiblings}>
                    <Text style={styles.text}>{displaySiblings}</Text>
                  </TouchableHighlight>
                </View>
                <View style={{marginTop: '17%'}}>
                <TouchableHighlight onPress={this.onPressSibOrder}>
                  <Text style={styles.text}>{displaySibOrder}</Text>
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
    fontSize: 27,
    fontWeight: 'bold',
    },
    pageTitle: {
    color: '#fff',
    fontSize: 47,
    fontWeight: 'bold',
    },
    });
