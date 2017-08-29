import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';
import { Link } from 'react-router-dom';
import StatsCard from '../components/StatsCard';

class UserProfile extends Component {
  render() {
    return (
      <div>
        <div style={{width: '96.5%', marginLeft: '1.75%', marginTop: -20}}>
          <Paper zDepth={2}>
            <Link to="/users"><FlatButton primary={true} style={{float: 'left', width: 100, height: 40, marginTop: 18, marginLeft: 20}} labelStyle={{fontSize: 18}} label="back"/></Link>
            <h2 style={{paddingTop: 13, paddingBottom: 13, marginLeft: '35%', fontSize: 43}}>User Profile</h2>
          </Paper>
        </div>
        <StatsCard
          cardTitle={'17'}
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
                  <p className="dashboardCardNumber" style={{fontSize: 21, marginTop: 5}}>2uYADqNztWnszWgcJ<br /></p>
                  <p style={{fontSize: 17, color: 'gray', marginTop: 8}}>User ID</p>
                </div>
              </div>
            </Paper>
          </div>
          <div className="col-sm-12 row-no-padding">
            <Paper>
              <div style={{backgroundColor: '#E8E8E8'}}><h4 style={{color: '#8B8B8B', paddingTop: 8, marginLeft: 15, paddingBottom: 5}}>Posts</h4></div>
              <div style={{paddingLeft: 15, paddingRight: 15}}>
                <h2>Posts</h2>
              </div>
            </Paper>
          </div>
      </div>
    );
  }
}



export default UserProfile;
