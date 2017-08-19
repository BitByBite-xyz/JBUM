import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';

//Screen components
import StatsCard from '../components/StatsCard';
import SendPost from '../components/SendPost';

const Dashboard = () => {

  return (
    <div>
      <StatsCard
        cardTitle={'532'}
        cardDiscriptor={'Users'}
        cardStyle={{height: 100, width: 5, backgroundColor: 'blue'}}
      />
      <StatsCard
        cardTitle={'16,924'}
        cardDiscriptor={'Posts'}
        cardStyle={{height: 100, width: 5, backgroundColor: 'orange'}}
      />
      <StatsCard
        cardTitle={'12,532'}
        cardDiscriptor={'Replies'}
        cardStyle={{height: 100, width: 5, backgroundColor: 'green'}}
      />
      <SendPost />
    </div>
  )
}
export default Dashboard;
