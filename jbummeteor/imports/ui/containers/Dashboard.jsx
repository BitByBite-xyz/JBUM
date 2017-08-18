import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';

//Screen components
import UsersCard from '../components/UsersCard';
import PostsCard from '../components/PostsCard';
import RepliesCard from '../components/RepliesCard';
import SendPost from '../components/SendPost';

const Dashboard = () => {

  return (
    <div>
      <UsersCard />
      <PostsCard />
      <RepliesCard />
      <SendPost />
    </div>
  )
}
export default Dashboard;
