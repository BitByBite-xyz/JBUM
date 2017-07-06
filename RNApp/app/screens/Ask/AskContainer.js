import React, { Component } from 'react';

import AskPage from './AskPage';
import Meteor, { createContainer } from 'react-native-meteor';


class AskContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'gjboibg',
      body: 'vfvfs',
      error: null,
    };

  }

  postButton(){

    const {title, body} = (this.state)


    Meteor.call('Posts.insert', title,body, (err) => {
      if (err) {
        console.log("Post err"+err.details);
        return;
      } else {
        console.log("Post added");
        this.props.navigation.goBack();
      }
    });

  }

  render() {
    return (
      <AskPage
        updateState={this.setState.bind(this)}
        postButton={this.postButton.bind(this)}


        {...this.state}
      />
    );
  }
}
AskContainer.propTypes = {
  navigator: React.PropTypes.object,
  title: React.PropTypes.string,
  body: React.PropTypes.string
};

export default AskContainer;
