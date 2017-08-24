import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';

//Screen components
import UsersList from '../components/UsersList';

const Users = () => {

  return (
    <div style={{marginLeft: 4}}>
      <UsersList />
    </div>
  )
}
export default Users;
