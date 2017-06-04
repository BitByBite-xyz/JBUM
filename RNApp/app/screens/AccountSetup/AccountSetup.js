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
import { Button, Icon} from 'react-native-elements'
import Swiper from 'react-native-swiper';

import colors from '../../config/styles';

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
stylesheet.formGroup.normal.flexDirection = 'column';
stylesheet.formGroup.error.flexDirection = 'row';
const options = {
  stylesheet: stylesheet
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

var ethnicity = t.struct({
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

var relationships = t.struct({
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


t.Number.getValidationErrorMessage = function(value, path, context) {
	return 'bad number';
};

const AccountSetup = (props) => {
	var Form = t.form.Form; //docs :https://github.com/gcanti/tcomb-form-native#setup
	return (
		<Swiper style={styles.wrapper} showsButtons={false}>
				<View style={styles.slide1}>
					<Form
						//ref="form"
						type={Person}
						options={options}
					/>
        </View>

        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
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
