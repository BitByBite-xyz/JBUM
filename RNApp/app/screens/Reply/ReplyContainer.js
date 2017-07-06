import React, { Component } from 'react';
import Reply from './Reply';

import { NavigationActions } from 'react-navigation';


class ReplyContainer extends Component {
  constructor(props) {

    super(props);



  }

  render() {
    return (
      <Reply
        navigation={this.props.navigation}
        {...this.state}
      />
    );
  }
};

export default ReplyContainer;
