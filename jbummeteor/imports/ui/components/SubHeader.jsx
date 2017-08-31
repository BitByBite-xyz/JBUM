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
import MdDataUsage from 'react-icons/lib/md/data-usage';
import MdQuestionAnswer from 'react-icons/lib/md/question-answer';
import MdAccountCircle from 'react-icons/lib/md/account-circle';
import MdFlag from 'react-icons/lib/md/flag';
import MdPeople from 'react-icons/lib/md/people';

const SubHeader = () => (
  <Paper zDepth={2}>
  <div style={{height: 600}}>
    <List>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <ListItem
          leftAvatar={<Avatar icon={<MdHome />} />}
          primaryText="Dashboard"
        />
      </Link>
      <Link to="/users" style={{ textDecoration: 'none' }}>
        <ListItem
          leftAvatar={<Avatar icon={<MdSupervisorAccount />} />}
          primaryText="Users"
        />
      </Link>
      <Link to="/demographics" style={{ textDecoration: 'none' }}>
        <ListItem
          leftAvatar={<Avatar icon={<MdDataUsage />} />}
          primaryText="Demographics"
        />
      </Link>
      <Link to="/responder" style={{ textDecoration: 'none' }}>
        <ListItem
          leftAvatar={<Avatar icon={<MdPeople />} />}
          primaryText="Responder"
        />
      </Link>
      <Link to="/flagged" style={{ textDecoration: 'none' }}>
        <ListItem
          leftAvatar={<Avatar icon={<MdFlag />} />}
          primaryText="Flagged"
        />
      </Link>
      <Link to="/account" style={{ textDecoration: 'none' }}>
        <ListItem
          leftAvatar={<Avatar icon={<MdAccountCircle />} />}
          primaryText="Account"
        />
      </Link>
    </List>
  </div>
</Paper>
);

export default SubHeader;
