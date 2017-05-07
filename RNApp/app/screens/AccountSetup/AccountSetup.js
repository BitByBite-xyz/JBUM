import React from 'react';
import { Text, View, Image, StyleSheet, StatusBar, Linking } from 'react-native';

import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Button, Icon } from 'react-native-elements'
import { SocialIcon } from 'react-native-elements';

import { colors } from '../../config/styles';
import GenericTextInput, { InputWrapper } from '../../components/GenericTextInput';
import images from '../../config/images';
import styles from './styles';
import Wallpaper from '../../components/Wallpaper';
var t = require('tcomb-form-native');

// a type representing positive numbers
var Age = t.refinement(t.Number, function (n) { return n >= 18; });


Age.getValidationErrorMessage = function (value, path, context) {
  return 'bad age, locale: ' + context.locale;
};
var Person = t.struct({ //add here to add to the form
  name: t.String,
  age: Age,
  gender_identity: t.enums({
    M: 'Male',
    F: 'Female',
    O: 'Prefer not to answer',
  }),
  sexual_orientation: t.enums({
    H: 'Heterosexual',
    O: 'Homosexual',
    A: 'Asexual',
    T: 'Other',
    M: 'Prefer not to answer',
  }),
});

//Styling for tcomb-form-native
var _ = require('lodash');
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

stylesheet.textbox.normal.borderWidth = 0;
stylesheet.textbox.error.borderWidth = 0;
stylesheet.textbox.normal.marginBottom = 0;
stylesheet.textbox.error.marginBottom = 0;

stylesheet.textboxView.normal.borderWidth = 0;
stylesheet.textboxView.error.borderWidth = 0;
stylesheet.textboxView.normal.borderRadius = 0;
stylesheet.textboxView.error.borderRadius = 0;
stylesheet.textboxView.normal.borderBottomWidth = 1;
stylesheet.textboxView.error.borderBottomWidth = 1;
stylesheet.textbox.normal.marginBottom = 5;
stylesheet.textbox.error.marginBottom = 5;
stylesheet.controlLabel.normal.color = '#FFFFFF';
stylesheet.textboxView.normal.borderColor = '#FFFFFF';
stylesheet.pickerContainer.normal.borderColor = '#FFFFFF';


t.Number.getValidationErrorMessage = function (value, path, context) {
  return 'bad number';
};

const options = {
  stylesheet: stylesheet,
  fields: {
      gender_identity: {
        nullOption: {value: '', text: 'Choose your gender'}
      }
    },
};



const AccountSetup = (props) => {
var Form = t.form.Form; //docs :https://github.com/gcanti/tcomb-form-native#setup

  return (

<Wallpaper>

    <View style={styles.container}>
        {/* display */}
        <Form
          //ref="form"
          type={Person}
          options={options}
        />

      </View>


      <View style={styles.buttons}>
        <Button
          icon={{name: 'chevron-right',buttonStyle: styles.buttons}}
          backgroundColor={'transparent'}
          onPress={this.next}

        />
        </View>



</Wallpaper>

  );
};

AccountSetup.propTypes = {
  updateState: React.PropTypes.func,
  next: React.PropTypes.func,
  error: React.PropTypes.string,
  confirmPasswordVisible: React.PropTypes.bool,
};

export default AccountSetup;
