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
    this.state = {
      surveyData: null,
    }
  }

  doAccountSetup = () => {
    const { surveyData } = this.state;
    const { userData } = this.props;

    let data = {};

    if (!surveyData && userData) {
      _.each(userData, function (user) {
        if (user.profile && user.profile.AccountSetupData) {
          _.each(user.profile.AccountSetupData, function (userAccountData, index) {
            if (_.has(data, index)) {
              let currData = data[index];
              data[index].push(userAccountData);
            }
            else {
              data[index] = [userAccountData];
            }
          });
        }
      });
      this.setState({surveyData: data});
    }
  }

  harvestData = (data) => {
    let returner = [];

    const uniques = data.filter(function(item, i, ar){ return ar.indexOf(item) === i; });

    var counts = {};

    for (var i = 0; i < data.length; i++) {
      var num = data[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    _.each(uniques, (datapoint, index) => {
      returner.push({name: datapoint, value: counts[datapoint]})
    } )
    return returner;
  }

  render() {
    let ageData = null;
    let genderData = null;
    let sexualityData = null;
    let ethnicityData = null;
    let generationData = null;
    let citizenshipData = null;
    let familyData = null;
    let siblingsData = null;
    let birthOrderData = null;
    const { surveyData } = this.state;;

    if (surveyData) {
      ageData = this.harvestData(surveyData['Age']);
      genderData = this.harvestData(surveyData['Gender']);
      sexualityData = this.harvestData(surveyData['Sexuality']);
      ethnicityData = this.harvestData(surveyData['Ethnicicty']);
      generationData = this.harvestData(surveyData['Generation']);
      citizenshipData = this.harvestData(surveyData['Citizenship']);
      familyData = this.harvestData(surveyData['Family']);
      siblingsData = this.harvestData(surveyData['Siblings']);
      birthOrderData = this.harvestData(surveyData['Birth Order']);
    }
      return (
          <div>
            <ChartPanel
              graphName="Age"
              data={ageData ? ageData: [{name: '', value: 400}]}
            />
            <ChartPanel
              graphName="Gender"
              data={genderData ? genderData: [{name: '', value: 400}]}
            />
            <ChartPanel
              graphName="Sexuality"
              data={sexualityData ? sexualityData: [{name: '', value: 400}]}
              />
            <ChartPanel
              graphName="Ethnicity"
              data={ethnicityData ? ethnicityData: [{name: '', value: 400}]}
            />
            <ChartPanel
              graphName="Generation"
              data={generationData ? generationData: [{name: '', value: 400}]}
            />
            <ChartPanel
              graphName="Citizenship"
              data={citizenshipData ? citizenshipData: [{name: '', value: 400}]}
            />
            <ChartPanel
              graphName="Family"
              data={familyData ? familyData: [{name: '', value: 400}]}
            />
            <ChartPanel
              graphName="Siblings"
              data={siblingsData ? siblingsData: [{name: '', value: 400}]}
            />
            <ChartPanel
              graphName="Birth Order"
              data={birthOrderData ? birthOrderData: [{name: '', value: 400}]}
            />
            {this.props.userDataReady ? this.doAccountSetup() : null}
        </div>
      );
  }
}

export default createContainer(() => {
  const handle = Meteor.subscribe('userList');
  return {
    userData: Meteor.users.find({}).fetch(),
    userDataReady: handle.ready()
  }
}, Survey);
