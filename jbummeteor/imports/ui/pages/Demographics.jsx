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
    var counts = {};
    const uniques = data.filter(function(item, i, ar){ return ar.indexOf(item) === i; });

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
    let secondaryEthnicictyData = null;
    let livingArrangementData = null;
    let adultsData = null;
    let kidsData = null;
    let birthOrderData = null;
    const { surveyData } = this.state;;

    if (surveyData) {
      ageData = this.harvestData(surveyData['Age']);
      genderData = this.harvestData(surveyData['Gender']);
      sexualityData = this.harvestData(surveyData['Sexuality']);
      ethnicityData = this.harvestData(surveyData['Ethnicicty']);
      secondaryEthnicictyData = this.harvestData(surveyData['Secondary Ethnicicty']);
      livingArrangementData = this.harvestData(surveyData['Living Arrangement']);
      adultsData = this.harvestData(surveyData['Adults']);
      kidsData = this.harvestData(surveyData['Kids']);
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
              graphName="2nd Ethnicicty"
              data={secondaryEthnicictyData ? secondaryEthnicictyData: [{name: '', value: 400}]}
            />
            <ChartPanel
              graphName="Living"
              data={livingArrangementData ? livingArrangementData: [{name: '', value: 400}]}
            />
            <ChartPanel
              graphName="Family"
              data={adultsData ? adultsData: [{name: '', value: 400}]}
            />
            <ChartPanel
              graphName="Kids"
              data={kidsData ? kidsData: [{name: '', value: 400}]}
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
