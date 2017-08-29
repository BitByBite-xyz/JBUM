import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Link } from 'react-router-dom';

//Screen components
import ChartPanel from '../components/ChartPanel';

class Survey extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div>
                <ChartPanel
                    graphName="Age"
                    data={[{name: '8', value: 450}, {name: '9', value: 200}, {name: '10', value: 350},
                        {name: '11', value: 200}, {name: '12', value: 200}, {name: '13', value: 200},
                        {name: '14', value: 200}, {name: '15', value: 200}, {name: '16', value: 200},
                        {name: '17', value: 200}, {name: '18', value: 200}, {name: '19', value: 200},
                        {name: '20', value: 200}, {name: '21', value: 200}, {name: '22', value: 200},
                        {name: '23', value: 200}, {name: '24', value: 200}]}
                />
                <ChartPanel
                    graphName="Gender"
                    data={[{name: 'Male', value: 400}, {name: 'Female', value: 300}, {name: 'Genderfluid', value: 300},
                        {name: 'Transgender', value: 200}, {name: 'Other', value: 200}]}
                />
                <ChartPanel
                    graphName="Sexuality"
                    data={[{name: 'Heterosexual', value: 400}, {name: 'Homosexual', value: 300},
                        {name: 'Bisexual', value: 300}, {name: 'Asexual', value: 200},
                        {name: 'Pansexual', value: 200}, {name: 'Other', value: 200}]}
                />
                <ChartPanel
                    graphName="Ethnicity"
                    data={[{name: 'Caucasian', value: 400}, {name: 'Black or African American', value: 300},
                        {name: 'Hispanic or Latino', value: 300}, {name: 'Asian', value: 200},
                        {name: 'Pacific Islander', value: 200}, {name: 'American Indian', value: 200},
                        {name: "Don't Know", value: 200}]}
                />
                <ChartPanel
                    graphName="Generation"
                    data={[{name: '1st Generation', value: 400}, {name: '2nd Generation', value: 300},
                        {name: '3rd Generation', value: 300}, {name: '4th Generation', value: 200},
                        {name: '5th Generation', value: 200}]}
                />
                <ChartPanel
                    graphName="Citizenship"
                    data={[{name: 'Born inside the U.S.', value: 400},
                        {name: 'Born outside the U.S.', value: 300},
                        {name: 'Migrated to the U.S.', value: 300}]}
                />
                <ChartPanel
                    graphName="Family"
                    data={[{name: 'Live with both parents', value: 400},
                        {name: 'Live with one parent', value: 300},
                        {name: 'Live with relatives', value: 300}]}
                />
                <ChartPanel
                    graphName="Siblings"
                    data={[{name: 'Only Child', value: 400},
                        {name: 'Have half/step siblings', value: 300},
                        {name: 'Have brothers/sisters', value: 300}]}
                />
                <ChartPanel
                    graphName="Birth Order"
                    data={[{name: 'Oldest', value: 400}, {name: 'Middle Child', value: 300},
                        {name: 'Youngest', value: 300}, {name: 'No Siblings', value: 200}]}
                />
            </div>
        );
    }
}
export default Survey;
