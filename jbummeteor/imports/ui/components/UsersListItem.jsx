import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

//This is a complete example of a card that we can create and use in the content section of the dashboard
export default function UsersListItem(props) {
  const { user } = props;
  const linkTo = "/usersprofile/" + user.id;

  return (
          <TableRow>
            <TableRowColumn style={{paddingLeft: 70}}>{user.id.toString()}</TableRowColumn>
            <TableRowColumn style={{paddingLeft: 60}}>{user.name.toString()}</TableRowColumn>
            <TableRowColumn style={{paddingLeft: 57}}>{user.posts.toString()}</TableRowColumn>
            <TableRowColumn style={{paddingLeft: 51}}>{user.replies.toString()}</TableRowColumn>
            <TableRowColumn><Link to={linkTo}><FlatButton label="Check Profile"/></Link></TableRowColumn>
          </TableRow> );
}
