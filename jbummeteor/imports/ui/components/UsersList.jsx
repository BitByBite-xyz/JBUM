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
import { Fake } from 'meteor/anti:fake';
import { Random } from 'meteor/random';
const users = [];
//This is a complete example of a card that we can create and use in the content section of the dashboard
class UsersList extends React.Component {
  constructor(props){
    super(props);

    for(let i = 0; i < 500; i++) {
        users.push({
            posts: _.random(0,233),
            replies: _.random(0,233),
            name: Fake.user({
                      fields: ['name'],
                  }).name,
            id: Random.id()
        })
    }

    const userList = users.map((user) =>
                      <UsersListItem
                        user={user}/>
                    );
    this.state = {
      userList: userList
    }

  }


  render() {
    return (
            <div className="col-sm-12 row-no-padding">
              <Paper zDepth={2}>
              <Table>
                <TableHeader displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn style={{fontSize: 16}}>ID</TableHeaderColumn>
                    <TableHeaderColumn style={{fontSize: 16}}>Name</TableHeaderColumn>
                    <TableHeaderColumn style={{fontSize: 16}}>Posts</TableHeaderColumn>
                    <TableHeaderColumn style={{fontSize: 16}}>Replies</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                    {this.state.userList}

                </TableBody>
              </Table>
            </Paper>
            </div>
    );
  }
}


export default UsersList;
