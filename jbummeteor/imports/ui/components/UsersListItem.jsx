import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

//This is a complete example of a card that we can create and use in the content section of the dashboard
export default function UsersListItem(props) {
  const { user } = props;

  return (
          <TableRow>
            <TableRowColumn style={{paddingLeft: 70}}>{user.id.toString()}</TableRowColumn>
            <TableRowColumn style={{paddingLeft: 45}}>{user.name.toString()}</TableRowColumn>
            <TableRowColumn style={{paddingLeft: 57}}>{user.posts.toString()}</TableRowColumn>
            <TableRowColumn style={{paddingLeft: 51}}>{user.replies.toString()}</TableRowColumn>
          </TableRow> );
}
