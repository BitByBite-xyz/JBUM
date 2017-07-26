 import React, { Component } from 'react';
 import {
   	Text,
   	View,
   	Image,
   	StatusBar,
   	Linking,
    TouchableOpacity
}
from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';
import {
	Button,
	Icon
}
from 'react-native-elements'
import Swiper from 'react-native-swiper-animated';//https://github.com/chitezh/react-native-swiper-animated
import styles from './styles';
var t = require('tcomb-form-native');
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
var Form = t.form.Form;

var Age = t.refinement(t.Number, function(n) {
	return n >= 18;
});

Age.getValidationErrorMessage = function(value, path, context) {
	return 'bad age, locale: ' + context.locale;
};

let Person = t.struct({ //add here to add to the form
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

let Ethnicity = t.struct({
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
		dk: 'Don\'t know'
	})
});

let Relationships = t.struct({
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
		young: 'Youngest sibling',
		nosib: 'No Siblings'
	})
});


t.Number.getValidationErrorMessage = function(value, path, context) {
	return 'bad number';
};

const options_p = {
	fields: {
		gender_identity: {
			label: "Gender Identity                  "//a cancer way to fix this ik :/
		},
		sexual_orientation: {
			label: "Sexual Orientation"
		}
	}
};

const options_e = {
	fields: {
		born: {
			label: "Born                                       "
		},
		gen: {
			label: "Generation"
		},
		ethnic: {
			label: "Ethnicity"
		}
	}
};

const options_r = {
	fields: {
		parents: {
			label: "Parents                                       "//i hate you connor -sean
		},
		siblings: {
			label: "Siblings"
		},
		age: {
			label: "Age"
		}
	}
};

class AccountSetup extends Component {//all in here for refs to work :)
  constructor(props) {
    super(props);

    this.mounted = false;

  }

  componentWillMount() {
    this.mounted = true;
  }


  componentWillUnmount() {
    this.mounted = false;
  }

  swiper = null;

  prev = () => {
    this.swiper.forceLeftSwipe();
  }

  next = () => {
    this.swiper.forceRightSwipe();
  }

  render() {
    return (

      <Swiper style={styles.wrapper}
							showsButtons={true}
							stack
							Swiper
							showPagination={true}
							showPaginationBelow={true}
							paginationStyle={{ container: { backgroundColor: 'transparent' } }}
							dragY
							dragDownToBack
							paginationActiveDotColor={"#f4f4f4"}
							paginationDotColor={"#8e8e8e"}
							hidePaginationOnLast
              onRightSwipe={this.prev}
              ref={(swiper) => {
		            this.swiper = swiper;
		          }}
							>
				<View style={styles.slide1}>
					<Form
						ref="person_form"
						type={Person}
						options={options_p}
					/>
	      </View>
				<View style={styles.slide2}>
					<Form
						//ref="form"
						type={Ethnicity}
						options={options_e}
					/>
				</View>
				<View style={styles.slide3}>
					<Form
						//ref="form"
						type={Relationships}
						options={options_r}
					/>
	       </View>
					<View style={styles.slide4}>
						<Text style={styles.congratsHeader}>Congrats!</Text>
						<Text style={styles.congratsBody}>You have offically completed the setup of your account! All of the information you give is completely anonymous. You may now go on to use the application!</Text>
						<TouchableOpacity>
							<Text style={styles.getStarted}>Get Started</Text>
						</TouchableOpacity>
			    </View>
			</Swiper>
    );
  }
}

export default AccountSetup;
