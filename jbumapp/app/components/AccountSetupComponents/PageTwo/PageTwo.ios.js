import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import Picker from 'react-native-picker';

const livingArrangementOptions = ['One household', 'Two households', 'No Household', 'Other'];
const adultOptions = ['One parent', 'Two parents', 'Three Parents', 'Four Parents', 'Relatives', 'Other'];
const kidOptions = ['Only child', 'Siblings', 'Step-siblings', 'Half-siblings', 'Adopted siblings', 'Mix'];
const sibOrderOptions = ['Only child','First born female', 'First born male', 'Middle child', 'Youngest female', 'Youngest male'];
const religionOptions = ['Atheist', 'Buddhist', 'Catholic', 'Protestant','Hindu', 'Jewish', 'Protestant', 'Other Spirituality',' Still searching'];

export default class PageTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLivingArrangement: '',
      selectedAdults:'',
      selectedKids: '',
      selectedSiblingOrder: '',
      selectedReligion: '',
      showLivingArrangement: false,
      showAdults: false,
      showKids: false,
      showSibOrder: false,
      showReligion:false,
      hasValidData:false
    };
  }
  validateData = () => {
    if (this.state.showLivingArrangement &&
        this.state.showAdults &&
        this.state.showKids &&
        this.state.showSibOrder &&
        this.state.showReligion &&
        !this.state.hasValidData) {
          this.setState({hasValidData:true});
          this.props.handlePageComplete();
    }
  }
  //Living Arrangement
  onPressFamily = () => {
    const { selectedLivingArrangement } = this.state;
    const { handleAddData } = this.props;

    Picker.init({
        pickerTitleText: 'Select Living Arrangement',
        pickerConfirmBtnText: 'Confirm',
        pickerCancelBtnText: 'Cancel',
        pickerData: livingArrangementOptions,
        selectedValue: [],
        onPickerConfirm: data => {
          this.setState(previousState => {
            return { selectedLivingArrangement: data, showLivingArrangement: true };
          }, () => {
            handleAddData('Living Arrangement',data);
            this.validateData();
          });
        },
        onPickerCancel: data => {
          this.setState(previousState => {
            return { selectedLivingArrangement: '', showLivingArrangement: false };
          });
          Picker.hide();
        },
        onPickerSelect: data => {

        }
    });
    Picker.show();
  }
  //Adults
  onPressAdults = () => {
    const { selectedAdults } = this.state;
    const { handleAddData } = this.props;

    Picker.init({
        pickerTitleText: 'Select Adults',
        pickerConfirmBtnText: 'Confirm',
        pickerCancelBtnText: 'Cancel',
        pickerData: adultOptions,
        selectedValue: [],
        onPickerConfirm: data => {
          this.setState(previousState => {
            return { selectedAdults: data, showAdults: true };
          }, () => {
            handleAddData('Adults',data);
            this.validateData();
          });
        },
        onPickerCancel: data => {
          this.setState(previousState => {
            return { selectedAdults: data, showAdults: false };
          });
          Picker.hide();
        },
        onPickerSelect: data => {

        }
    });
    Picker.show();
  }
  //Kids
  onPressKids = () => {
    const { selectedKids } = this.state;
    const { handleAddData } = this.props;

    Picker.init({
        pickerTitleText: 'Select Kids',
        pickerConfirmBtnText: 'Confirm',
        pickerCancelBtnText: 'Cancel',
        pickerData: kidOptions,
        selectedValue: [],
        onPickerConfirm: data => {
          this.setState(previousState => {
            return { selectedKids: data, showKids: true };
          });
          handleAddData('Kids',data);
          this.validateData();
        },
        onPickerCancel: data => {
          this.setState(previousState => {
            return { selectedAdults: '', showAdults: false };
          });
          Picker.hide();
        },
        onPickerSelect: data => {

        }
    });
    Picker.show();
  }
  //Birth Order
  onPressSibOrder = () => {
    const { selectedSibOrder } = this.state;
    const {handleAddData} = this.props;

    Picker.init({
        pickerTitleText: 'Select Birth Order',
        pickerConfirmBtnText: 'Confirm',
        pickerCancelBtnText: 'Cancel',
        pickerData: sibOrderOptions,
        selectedValue: [],
        onPickerConfirm: data => {
          this.setState(previousState => {
            return { selectedSibOrder: data, showSibOrder: true };
          }, () => {
            handleAddData('Birth Order',data);
            this.validateData();
          });
        },
        onPickerCancel: data => {
          this.setState(previousState => {
            return { selectedSibOrder: '', showSibOrder: false };
          });
          Picker.hide();
        },
        onPickerSelect: data => {

        }
    });
    Picker.show();
  }
  //Religion
  onPressReligion = () => {
    const { selectedReligion } = this.state;
    const { handleAddData } = this.props;

    Picker.init({
        pickerTitleText: 'Select Religion',
        pickerConfirmBtnText: 'Confirm',
        pickerCancelBtnText: 'Cancel',
        pickerData: religionOptions,
        selectedValue: [],
        onPickerConfirm: data => {
          this.setState(previousState => {
            return { selectedReligion: data, showReligion: true };
          }, () => {
            handleAddData('Religion',data);
            this.validateData();
          });
        },
        onPickerCancel: data => {
          this.setState(previousState => {
            return { selectedSibOrder: '', showSibOrder: false };
          });
          Picker.hide();
        },
        onPickerSelect: data => {
        }
    });
    Picker.show();
  }

  render() {
    const displayFamily = this.state.showLivingArrangement ? 'Living Arrangement: ' + this.state.selectedLivingArrangement : 'Select Your Living Arrangement';
    const displayAdults = this.state.showAdults ? 'Adults: ' + this.state.selectedAdults : 'Select Adults';
    const displayKids = this.state.showKids ? 'Kids: ' + this.state.selectedKids : 'Select Kids';
    const displaySibOrder = this.state.showSibOrder ? 'Birth Order: ' + this.state.selectedSibOrder : 'Select Birth Order';
    const displayReligion = this.state.showReligion ? 'Religion: ' + this.state.selectedReligion : 'Select Religion';
    
    return(
          <View>
            <View style={{alignItems: 'center', marginTop: '10%'}}><Text style={styles.pageTitle}>Relationships</Text></View>
            <View style={{marginTop: Dimensions.get('window').height > 275 ? '15%':15}}>
                <View>
                  <TouchableHighlight onPress={this.onPressFamily} underlayColor={'transparent'}>
                    <Text style={styles.text}>{displayFamily}</Text>
                  </TouchableHighlight>
                </View>
                <View style={{marginTop: '17%'}}>
                  <TouchableHighlight onPress={this.onPressAdults} underlayColor={'transparent'}>
                    <Text style={styles.text}>{displayAdults}</Text>
                  </TouchableHighlight>
                </View>
                <View style={{marginTop: '17%'}}>
                  <TouchableHighlight onPress={this.onPressKids} underlayColor={'transparent'}>
                    <Text style={styles.text}>{displayKids}</Text>
                  </TouchableHighlight>
                </View>
                <View style={{marginTop: '17%'}}>
                  <TouchableHighlight onPress={this.onPressSibOrder} underlayColor={'transparent'}>
                    <Text style={styles.text}>{displaySibOrder}</Text>
                  </TouchableHighlight>
                </View>
                <View style={{marginTop: '17%'}}>
                  <TouchableHighlight onPress={this.onPressReligion} underlayColor={'transparent'}>
                    <Text style={styles.text}>{displayReligion}</Text>
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
      fontSize: Dimensions.get('window').height < 570 ? 34: 40,
      fontWeight: 'bold',
    },
    });
