import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import SettingsCell from 'material-ui/svg-icons/action/settings-cell';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';

const SubHeader = () => (
  <Paper zDepth={2}>
  <div style={{height: 600}}>
    <List>
      <Link to="/home" style={{ textDecoration: 'none' }}>
        <ListItem
          leftAvatar={<Avatar icon={<SettingsCell />} />}
          primaryText="Dashboard"
        />
      </Link>
      <Link to="/home/users" style={{ textDecoration: 'none' }}>
        <ListItem
          leftAvatar={<Avatar icon={<FileFolder />} />}
          primaryText="Users"
        />
      </Link>
      <Link to="/home/survey" style={{ textDecoration: 'none' }}>
        <ListItem
          leftAvatar={<Avatar icon={<FileFolder />} />}
          primaryText="Survey"
        />
      </Link>
      <Link to="/home/account" style={{ textDecoration: 'none' }}>
        <ListItem
          leftAvatar={<Avatar icon={<FileFolder />} />}
          primaryText="Account"
        />
      </Link>
      <Link to="/home/settings" style={{ textDecoration: 'none' }}>
        <ListItem
          leftAvatar={<Avatar icon={<FileFolder />} />}
          primaryText="Settings"
        />
      </Link>
    </List>
  </div>
</Paper>
);

export default SubHeader;
