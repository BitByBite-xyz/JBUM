import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import {blue500, red500, greenA200,cyan500,pinkA200} from 'material-ui/styles/colors';

//Icon Imports
import MdSettings from 'react-icons/lib/md/settings';
import MdHome from 'react-icons/lib/md/home';
import MdSupervisorAccount from 'react-icons/lib/md/supervisor-account';
import MdDataUsage from 'react-icons/lib/md/data-usage';
import MdQuestionAnswer from 'react-icons/lib/md/question-answer';
import MdAccountCircle from 'react-icons/lib/md/account-circle';
import MdFlag from 'react-icons/lib/md/flag';
import MdPeople from 'react-icons/lib/md/people';


class Logged extends Component {
  constructor(props){
    super(props);
  }
  logout(){
   // e.preventDefault();
    Meteor.logout( (err) => {
        if (err) {
            console.log( err.reason );
        } else {
            window.location.reload();
        }
    });
  }
  refresh(){
    window.location.reload();
  }
  onTouch = (child) => {
    switch (child) {
      case "Sign Out":
        this.logout();
        break;
      case "Refresh":
        this.refresh();
        break;

      default:
        break;
    }
    if (child.props.primaryText === "Sign Out"){
      this.logout()
    }
  }
  render(){
    return(
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        onItemTouchTap={(event,child)=>this.onTouch(child)}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign Out" onTouchTap={this.logout}/>
    </IconMenu>
    );
  }
}

const Nav = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MenuIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
  >
    <MenuItem primaryText="Dashboard" leftIcon={<MdHome />} containerElement={<Link to="/" style={{ textDecoration: 'none' }}/>} />
    <MenuItem primaryText="Users" leftIcon={<MdSupervisorAccount />} containerElement={<Link to="/users" style={{ textDecoration: 'none' }}/>} />
    <MenuItem primaryText="Demographics" leftIcon={<MdDataUsage />} containerElement={<Link to="/demographics" style={{ textDecoration: 'none' }}/>} />
    <MenuItem primaryText="Responder" leftIcon={<MdPeople />} containerElement={<Link to="/responder" style={{ textDecoration: 'none' }}/>} />
    <MenuItem primaryText="Flagged" leftIcon={<MdFlag />} containerElement={<Link to="/flagged" style={{ textDecoration: 'none' }}/>} />
    <MenuItem primaryText="Account" leftIcon={<MdAccountCircle />} containerElement={<Link to="/account" style={{ textDecoration: 'none' }}/>} />

  </IconMenu>
);

const Header = () => (
  <MuiThemeProvider>
    <AppBar
      title="JBUM Admin"
      iconElementLeft={<Nav />}
      iconElementRight={<Logged />}
      style={{backgroundColor: blue500}}
    />
  </MuiThemeProvider>
)

export default Header;
