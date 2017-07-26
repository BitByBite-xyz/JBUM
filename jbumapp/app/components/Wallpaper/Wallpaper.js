import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	ImageBackground,
} from 'react-native';


import images from '../../config/images';

export default class Wallpaper extends Component {
	render() {
		return (

			<ImageBackground style={{
				flex: 1,
				height: null,
				width: null,
				backgroundColor: (this.props.gray ? 'rgba(52, 52, 52, 1)' : null) // needs to be fixed with gray overlay
			}} source={images.wallpaper}>
				{this.props.children}
			</ImageBackground>
		);




	}
}
