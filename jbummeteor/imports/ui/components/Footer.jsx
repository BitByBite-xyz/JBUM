import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaInstagram from 'react-icons/lib/fa/instagram';

const Footer = () => {
  return (
    <div className="col-sm-12 row-no-padding footer" style={{backgroundColor: '#D1E2E7', paddingBottom: 40}}>
      <div style={{width: '90%', marginLeft: '5%', marginTop: 50}}>
        <p style={{fontSize: 18, color: '#484848', float: 'left'}}>&copy; JBUM, LLC. 2017</p>
        <div>
          <FaInstagram style={{float: 'right'}} size={22} />
          <FaTwitter style={{float: 'right', marginRight: '1.5%'}} size={22} />
          <FaFacebookSquare style={{float: 'right', marginRight: '1.5%'}} size={22}/>
        </div>
        <a href="http://www.justbetweenuandme.com"><p style={{fontSize: 18, color: '#484848', float: 'right', marginRight: '3%'}}>About</p></a>
        <a href="http://www.bitbybite.co"><p style={{fontSize: 18, color: '#484848', float: 'right', marginRight: '3%'}}>Powered by BitByBite, Inc.</p></a>
      </div>
    </div>
  );
}
export default Footer;
