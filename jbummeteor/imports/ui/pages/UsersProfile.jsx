import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';
import { Link } from 'react-router-dom';
import StatsCard from '../components/StatsCard';
import { createContainer } from 'meteor/react-meteor-data';
import { Posts } from '../../api/posts/posts';

import ResponceQuestion from '../components/ResponceQuestion';

class UserProfile extends Component {
  constructor(props){
    super(props);
  }
  getParamID = (props) => {
    return this.props.match.params.id;
  }
  getID = (props) => {
    console.log('MYid');
    return this.props.match.params.id;
  }
  getNumberPosts() {
    const { users, posts } = this.props;
    const id = this.props.match.params.id;
    const usersPosts = _.where(posts, {user_id: id}).length;
    return usersPosts;
  }
  renderUsersPosts = () => {
    const { usersPosts } = this.props;

    if (usersPosts) {
      return (usersPosts.map((post) => (
        <ResponceQuestion
          postContent={post}
          onClick={this.handleOpen}
        />
      )))
    }
  }
  handleOpen = (postContent) => {
    this.setState({open: true,
                   modalContent: postContent});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <div>
        <div style={{width: '96.5%', marginLeft: '1.75%', marginTop: -20}}>
          <Paper zDepth={1}>
            <Link to="/users"><FlatButton primary={true} style={{float: 'left', width: 100, height: 40, marginTop: 18, marginLeft: 17}} labelStyle={{fontSize: 18}} label="back"/></Link>
            <h2 style={{paddingTop: 13, paddingBottom: 13, marginLeft: '35%', fontSize: 43}}>User Profile</h2>
          </Paper>
        </div>
        <StatsCard
          cardTitle={this.getNumberPosts()}
          cardDiscriptor={'Posts'}
          cardStyle={{height: 100, width: 5, backgroundColor: '#82E6C2'}}
        />
        <StatsCard
          cardTitle={'12'}
          cardDiscriptor={'Replies'}
          cardStyle={{height: 100, width: 5, backgroundColor: '#F2BCE0'}}
        />
        <StatsCard
          cardTitle={'2'}
          cardDiscriptor={'Reports'}
          cardStyle={{height: 100, width: 5, backgroundColor: '#688FF4'}}
        />
        <div className="col-sm-4 row-no-padding">
          <Paper zDepth={1}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <div style={{height: 100, width: 5, backgroundColor: '#507EF4'}}/>
              <div style={{marginLeft: '13%', marginTop: '5.5%'}}>
                {/*<p className="dashboardCardNumber" style={{fontSize: 32}}>Level<br /></p>*/}
                <LinearProgress mode="determinate" value={44} style={{width: '380%', marginBottom: 18, marginTop: 22}} />
                <p style={{fontSize: 17, color: 'gray'}}>Level 4</p>
              </div>
            </div>
          </Paper>
        </div>
          <StatsCard
            cardTitle={'38'}
            cardDiscriptor={'Karma'}
            cardStyle={{height: 100, width: 5, backgroundColor: '#08C7F7'}}
          />
          <div className="col-sm-4 row-no-padding">
            <Paper zDepth={1}>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{height: 100, width: 5, backgroundColor: '#03E9F8'}}/>
                <div style={{marginLeft: '13%', marginTop: '5.5%'}}>
                  <p className="dashboardCardNumber" style={{fontSize: 21, marginTop: 5}}>{this.getParamID()}<br /></p>
                  <p style={{fontSize: 17, color: 'gray', marginTop: 8}}>User ID</p>
                </div>
              </div>
            </Paper>
          </div>
          <div className="col-sm-12 row-no-padding">
            <Paper style={{height: 300}}>
              <div style={{backgroundColor: '#E8E8E8'}}><h4 style={{color: '#8B8B8B', paddingTop: 8, marginLeft: 15, paddingBottom: 5}}>Posts</h4></div>
              <div style={{paddingLeft: 15, paddingRight: 15}}>
                {this.renderUsersPosts()}
              </div>
            </Paper>
          </div>
      </div>
    );
  }
}



export default createContainer(({ match }) => {
  const handle = Meteor.subscribe('Posts.pub.list');
  const handlee = Meteor.subscribe('userList')
  const userID = match.params.id;
  return {
  //  flaggedPosts: Posts.find( { $where: "this.post_flags.length > 0" }).fetch(),
    usersPosts: Posts.find({user_id: userID}).fetch(),
    posts: Posts.find({}).fetch(),
    users: Meteor.users.find({}).fetch()

  }
}, UserProfile);
