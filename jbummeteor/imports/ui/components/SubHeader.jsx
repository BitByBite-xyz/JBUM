import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, ListItem, makeSelectable} from 'material-ui/List';
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

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };
    
    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);


const SubHeader = () => (
  <Paper zDepth={2}>
  <div style={{height: 344}}>
     <SelectableList defaultValue={0}>
        <ListItem
          value={0}
          leftAvatar={<Avatar icon={<MdHome />} />}
          containerElement={<Link to='/' style={{ textDecoration: 'none' }}/>}
          primaryText="Dashboard"
        />
        <ListItem
          value={1}
          leftAvatar={<Avatar icon={<MdSupervisorAccount />} />}
          primaryText="Users"
          containerElement={<Link to="/users" style={{ textDecoration: 'none' }}/>}
        />
        <ListItem
          value={2}
          leftAvatar={<Avatar icon={<MdDataUsage />} />}
          primaryText="Demographics"
          containerElement={<Link to="/demographics" style={{ textDecoration: 'none' }}/>}
        />
        <ListItem
          value={3}
          leftAvatar={<Avatar icon={<MdPeople />} />}
          primaryText="Responder"
          containerElement={<Link to="/responder" style={{ textDecoration: 'none' }}/>}
        />
        <ListItem
          value={4}
          leftAvatar={<Avatar icon={<MdFlag />} />}
          primaryText="Flagged"
          containerElement={<Link to="/flagged" style={{ textDecoration: 'none' }}/>}
        />
        <ListItem
          value={5}
          leftAvatar={<Avatar icon={<MdAccountCircle />} />}
          primaryText="Account"
          containerElement={<Link to="/account" style={{ textDecoration: 'none' }}/>}
        />
    </SelectableList>
  </div>
</Paper>
);

export default SubHeader;
