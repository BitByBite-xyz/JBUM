import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';
import { Link } from 'react-router-dom';
import StatsCard from '../components/StatsCard';
import { createContainer } from 'meteor/react-meteor-data';
import { Posts } from '../../api/posts/posts';

import UserPost from '../components/UserPost';

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
  getNumberReplies() {
    const { users, posts, match } = this.props;
    let count = 0;
    _.each(posts, function(post){
      if (post.post_comments) {
        count = count + _.filter(post.post_comments, (comment) => (comment.user_id === match.params.id)).length;
      }
    });
    return count;
  }
  getNumberReports() {
    const { users, posts, match } = this.props;
    let reportsCount = 0;
    _.each(posts, function(post){
      if (post.post_flags) {
        reportsCount = reportsCount + _.filter(post.post_flags, (report) => (report.user_id === match.params.id)).length;
      }
    });
    return reportsCount;
  }
  getUsersKarma() {
    const questionNumber = this.getNumberPosts();
    const answeredNumber = this.getNumberReplies();
    const karma = Math.floor((questionNumber + answeredNumber)*1.5);
    //console.log('Posts: ' + questionNumber);
    //console.log('Replies: ' + answeredNumber);
    //console.log('Karma: ' + karma);
    return karma;
  }
  getUserLevel()  {
    const karma = this.getUsersKarma();
    const level = Math.floor(karma / 10);
    return level;
  }
  getUserLevelProgress() {
    const level = this.getUserLevel();
    const karma = this.getUsersKarma();
    const levelProgress = (karma * 10) - (level * 100);
    console.log(levelProgress);
    return levelProgress;
  }
  renderUsersPosts = () => {
    const { usersPosts } = this.props;

    if (usersPosts) {
      return (usersPosts.map((post) => (
        <UserPost
          key={post._id}
          postContent={post}
        />
      )))
    }
  }

  render() {
    return (
      <div>
        <div style={{width: '96.5%', marginLeft: '1.75%'}}>
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
          cardTitle={this.getNumberReplies()}
          cardDiscriptor={'Replies'}
          cardStyle={{height: 100, width: 5, backgroundColor: '#F2BCE0'}}
        />
        <StatsCard
          cardTitle={this.getNumberReports()}
          cardDiscriptor={'Reports'}
          cardStyle={{height: 100, width: 5, backgroundColor: '#688FF4'}}
        />
        <div className="col-sm-4 row-no-padding">
          <Paper zDepth={1}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <div style={{height: 100, width: 5, backgroundColor: '#507EF4'}}/>
              <div style={{marginLeft: '13%', marginTop: '5.5%'}}>
                {/*<p className="dashboardCardNumber" style={{fontSize: 32}}>Level<br /></p>*/}
                <LinearProgress mode="determinate" value={this.getUserLevelProgress()} style={{width: '380%', marginBottom: 18, marginTop: 22}} />
                <p style={{fontSize: 17, color: 'gray'}}>Level {this.getUserLevel()}</p>
              </div>
            </div>
          </Paper>
        </div>
          <StatsCard
            cardTitle={this.getUsersKarma()}
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
            <Paper className="col-sm-12 row-no-padding">
              <div style={{backgroundColor: '#E8E8E8'}}><p style={{color: '#8B8B8B', paddingTop: 8, marginLeft: '4%', paddingBottom: 5, fontSize: 32}}>Posts</p></div>
              <div style={{paddingLeft: 15, paddingRight: 15, marginTop: 18, marginBottom: 18}}>
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
