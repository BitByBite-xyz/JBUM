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

const SubHeader = () => (
  <Paper zDepth={2}>
  <div style={{height: 600}}>
    <List>
      <ListItem
        leftAvatar={<Avatar icon={<SettingsCell />} />}
        primaryText="Dashboard"
      />
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        primaryText="Users"
      />
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        primaryText="Survey"
      />
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        primaryText="Dashboard"
      />
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        primaryText="Account"
      />
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        primaryText="Settings"
      />
    </List>
  </div>
</Paper>
);

export default SubHeader;
