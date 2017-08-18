import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

//Users fed into table
import UsersListItem from './UsersListItem';

//This is a complete example of a card that we can create and use in the content section of the dashboard
const UsersList = () => (
  <div className="col-sm-12 row-no-padding">
    <Paper zDepth={2}>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn style={{fontSize: 16}}>ID</TableHeaderColumn>
          <TableHeaderColumn style={{fontSize: 16}}>Name</TableHeaderColumn>
          <TableHeaderColumn style={{fontSize: 16}}>Posts</TableHeaderColumn>
          <TableHeaderColumn style={{fontSize: 16}}>Replies</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        <UsersListItem />
        <UsersListItem />
        <UsersListItem />
        <UsersListItem />
        <UsersListItem />
        <UsersListItem />
      </TableBody>
    </Table>
  </Paper>
  </div>
);

export default UsersList;
