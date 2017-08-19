import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';

//Screen components
import GenderSurveyChart from '../components/GenderSurveyChart';
import RaceSurveyChart from '../components/RaceSurveyChart';
import SexualitySurveyChart from '../components/SexualitySurveyChart';
const Survey = () => {

  return (
    <div>
      <GenderSurveyChart />
      <RaceSurveyChart />
      <SexualitySurveyChart />
    </div>
  )
}
export default Survey;
