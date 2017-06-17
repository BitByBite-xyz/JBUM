import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

import Profile from './Profile';

class ProfileContainer extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Profile
        updateState={this.setState.bind(this)}
        {...this.state}
      />

    );
  }
}

ProfileContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default ProfileContainer;
