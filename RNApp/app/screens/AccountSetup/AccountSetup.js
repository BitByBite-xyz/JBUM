import React from 'react';
import {
	Text,
	View,
	Image,
	StyleSheet,
	StatusBar,
	Linking
}
from 'react-native';

import KeyboardSpacer from 'react-native-keyboard-spacer';
import {
	Button,
	Icon
}
from 'react-native-elements'
import {
	SocialIcon
}
from 'react-native-elements';

import {
	colors
}
from '../../config/styles';
import GenericTextInput, {
	InputWrapper
}
from '../../components/GenericTextInput';
import images from '../../config/images';
import styles from './styles';
import Wallpaper from '../../components/Wallpaper';
var t = require('tcomb-form-native');

var Age = t.refinement(t.Number, function(n) {
	return n >= 18;
});

Age.getValidationErrorMessage = function(value, path, context) {
	return 'bad age, locale: ' + context.locale;
};

const options = {
	stylesheet: stylesheet,
	fields: {
		gender_identity: {
			label: 'What is your gender?'
		},
		sexual_orientation: {
			label: 'What is your sexual orientation?'
		},
		born: {
			label: 'Where were you born?'
		},
		gen: {
			label: 'What generation are you?'
		},
		ethnic: {
			label: 'What is your ethnicity?'
		},
		parents: {
			label: 'What is your living relationship with parents?'
		},
		siblings: {
			label: 'Do you have siblins?'
		},
		age: {
			label: 'What is your age relationship with siblins?'
		}
	},
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

let ethnicity = t.struct({
    born: t.enums({
        US: 'Born in the U.S.',
        OUT: 'Born outisde the U.S.',
        IMM: 'Migrated to the U.S'
    }),
    gen: t.enums({
        first: 'Migrated to U.S.',
        second: 'Born in U.S.',
        third: 'Parents born in U.S.',
        fourth: 'Grandparents+ born in U.S.'
    }),
    ethnic: t.enums({
        same: 'Parents are same ethnicity',
        mix: 'Mixed ethnicity',
        dk: 'Don\t know'
    })
});

let relationships = t.struct({
	parents: t.enums({
		both: 'Live with both parents',
		one: 'Live with one parents',
		none: 'Live with relatives'
	}),
	siblings: t.enums({
		only: 'Only child',
		fake: 'Have half/step siblings',
		real: 'Have brothers/sisters'
	}),
	age: t.enums({
		old: 'Oldest sibling',
		mid: 'Middle sibling',
		young: 'Youngest sibling'
	})
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
stylesheet.select.normal.backgroundColor = '#FFFFFF';
stylesheet.pickerTouchable.active.borderColor = '#FFFFFF';


t.Number.getValidationErrorMessage = function(value, path, context) {
	return 'bad number';
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
              //options={options}
            />
          </View>


          <View style={styles.buttons}>
            <Button
              large
              icon={{name: 'chevron-right',buttonStyle: styles.buttons}}
              backgroundColor={'transparent'}
              onPress={Ethnicity}
            />
          </View>
    </Wallpaper>
	);
};

const Ethnicity = (props) => {
    return (
        <Wallpaper>
            <View style={styles.container}>
                {}
                <t.form.Form
                    type={ethnicity}
                />
            </View>
        </Wallpaper>
    )
}

AccountSetup.propTypes = {
	updateState: React.PropTypes.func,
	next: React.PropTypes.func,
	error: React.PropTypes.string,
	confirmPasswordVisible: React.PropTypes.bool,
};

export default AccountSetup;
