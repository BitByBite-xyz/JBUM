import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {blue500, yellow600} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
//Icon Imports
import MdSettings from 'react-icons/lib/md/settings';
import MdHome from 'react-icons/lib/md/home';
import MdSupervisorAccount from 'react-icons/lib/md/supervisor-account';
import MdQuestionAnswer from 'react-icons/lib/md/question-answer';
import MdAccountCircle from 'react-icons/lib/md/account-circle';

const SubHeader = () => (
  <Paper zDepth={2}>
  <div style={{height: 600}}>
    <List>
      <Link to="/home" style={{ textDecoration: 'none' }}>
        <ListItem
          leftAvatar={<Avatar icon={<MdHome />} />}
          primaryText="Dashboard"
        />
      </Link>
      <Link to="/home/users" style={{ textDecoration: 'none' }}>
        <ListItem
          leftAvatar={<Avatar icon={<MdSupervisorAccount />} />}
          primaryText="Users"
        />
      </Link>
      <Link to="/home/survey" style={{ textDecoration: 'none' }}>
        <ListItem
          leftAvatar={<Avatar icon={<MdQuestionAnswer />} />}
          primaryText="Survey"
        />
      </Link>
      <Link to="/home/account" style={{ textDecoration: 'none' }}>
        <ListItem
          leftAvatar={<Avatar icon={<MdAccountCircle />} />}
          primaryText="Account"
        />
      </Link>
      <Link to="/home/settings" style={{ textDecoration: 'none' }}>
        <ListItem
          leftAvatar={<Avatar icon={<MdSettings />} />}
          primaryText="Settings"
        />
      </Link>
    </List>
  </div>
</Paper>
);

export default SubHeader;
