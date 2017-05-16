import React, { Component } from 'react';

import Settings from './Settings';

class SettingsContainer extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Settings

        {...this.state}
      />
    );
  }
}
SettingsContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default SettingsContainer;
