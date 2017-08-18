import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';

//Screen components
import GenderSurveyChart from '../components/GenderSurveyChart';

const Survey = () => {

  return (
    <div>
      <GenderSurveyChart />
      <GenderSurveyChart />
    </div>
  )
}
export default Survey;
