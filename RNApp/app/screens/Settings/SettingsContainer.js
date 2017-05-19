import React, { Component } from 'react';

import Settings from './Settings';

class SettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {switchValue: false};

  }

  onValueChange(value){
    this.setState({switchValue: value});
  }

  render() {
    return (
      <Settings

        onValueChange={this.onValueChange.bind(this)}
        {...this.state}
      />
    );
  }
}


export default SettingsContainer;
