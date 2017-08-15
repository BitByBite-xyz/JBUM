import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {
    return (
      <div className="container" >
        <AccountsUIWrapper/>

      </div>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object,
};

export default App;
