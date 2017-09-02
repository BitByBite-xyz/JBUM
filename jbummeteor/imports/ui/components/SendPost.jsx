import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Posts } from '../../api/posts/posts';

export default class SendPost extends Component {
  submitPost(event) {
    event.preventDefault();

    let post = {
      title: this.refs.title.value,
      content: this.refs.content.value,
    }

    Meteor.call('insertPost', post, (error) =>{
      if(error) {
        alert("Unable to submit post: " + error.reason);
      } else {
        alert("Post added");
        browserHistory.push('/AppContainer');
      }
    });
  }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.submitPost.bind(this)}>
          <h3>Add Post</h3>

          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Title" ref="title" type="text" className="validate"/>
            </div>
            <div className="input-field col s6">
              <input placeholder="Content" ref="content" type="text" className="validate"/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>

        </form>
      </div>
    )
  }
}
