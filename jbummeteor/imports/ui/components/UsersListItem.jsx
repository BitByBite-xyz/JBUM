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
const UsersListItem = () => (

  <TableRow>
    <TableRowColumn style={{paddingLeft: 70}}>1</TableRowColumn>
    <TableRowColumn style={{paddingLeft: 45}}>John Smith</TableRowColumn>
    <TableRowColumn style={{paddingLeft: 57}}>23</TableRowColumn>
    <TableRowColumn style={{paddingLeft: 51}}>36</TableRowColumn>
  </TableRow>

);

export default UsersListItem;
