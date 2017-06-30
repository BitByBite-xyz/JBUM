import React, { Component } from 'react';

import Ask from './Ask';

class AskContainer extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Ask

        {...this.state}
      />
    );
  }
}
AskContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default AskContainer;
