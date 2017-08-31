import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import { createContainer } from 'meteor/react-meteor-data';
import { Posts } from '../../api/posts/posts';

class Users extends Component {
  constructor(props){
    super(props);
    const { users, posts } = this.props;
  }

  getNumberPosts(id) {
    const { users, posts } = this.props;
    const usersPosts = _.where(posts, {user_id: id}).length;
    return usersPosts;
  }
  getNumberReplies(id) {
    const { users, posts } = this.props;
    let count = 0;
    _.each(posts, function(post){
      if (post.post_comments) {
        count = count + _.filter(post.post_comments, (comment) => (comment.user_id === id)).length;
      }
    });

    return count;
  }

  renderUserList = () => {
    const { users, posts } = this.props;

    if (users) {
      return (users.map((user) => {
        const userRoles = Roles.getRolesForUser(user._id, 'default-group');

        const displayRole = userRoles.length === 0 ? 'student' : userRoles.join(", ");;

        return (
          <TableRow key={user._id} selectable={false}>
            <TableRowColumn >{user._id}</TableRowColumn>
            <TableRowColumn >{displayRole}</TableRowColumn>
            <TableRowColumn >{this.getNumberPosts(user._id)}</TableRowColumn>
            <TableRowColumn >{this.getNumberReplies(user._id)}</TableRowColumn>
            <TableRowColumn><Link to={'/usersprofile/' + user._id}><FlatButton label="Check Profile"/></Link></TableRowColumn>
          </TableRow>)
      }))
    }
  }

  render() {
    return (
      <div style={{marginLeft: 4}}>
        <div className="col-sm-12 row-no-padding">
          <Paper zDepth={2}>
          <Table>
            <TableHeader displaySelectAll={false} selectable={false}>
              <TableRow>
                <TableHeaderColumn style={{fontSize: 16}}>ID</TableHeaderColumn>
                <TableHeaderColumn style={{fontSize: 16}}>Role</TableHeaderColumn>
                <TableHeaderColumn style={{fontSize: 16}}>Posts</TableHeaderColumn>
                <TableHeaderColumn style={{fontSize: 16}}>Replies</TableHeaderColumn>
                <TableHeaderColumn></TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={true}>

              {/*<TableRow>
                <TableRowColumn style={{paddingLeft: 70}}>{user.id.toString()}</TableRowColumn>
                <TableRowColumn style={{paddingLeft: 60}}>{user.name.toString()}</TableRowColumn>
                <TableRowColumn style={{paddingLeft: 57}}>{user.posts.toString()}</TableRowColumn>
                <TableRowColumn style={{paddingLeft: 51}}>{user.replies.toString()}</TableRowColumn>
                <TableRowColumn><Link to={linkTo}><FlatButton label="Check Profile"/></Link></TableRowColumn>
              </TableRow>*/}
              {this.renderUserList()}
            </TableBody>
          </Table>
        </Paper>
        </div>
      </div>
    )
  }
}
export default createContainer(() => {
  const handle = Meteor.subscribe('Posts.pub.list');
  const handlee = Meteor.subscribe('userList')
  return {
  //  flaggedPosts: Posts.find( { $where: "this.post_flags.length > 0" }).fetch(),
    posts: Posts.find({}).fetch(),
    users: Meteor.users.find({}).fetch()

  }
}, Users);
