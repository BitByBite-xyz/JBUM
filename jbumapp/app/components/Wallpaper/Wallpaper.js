import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	ImageBackground,
	Image
} from 'react-native';
import { colors,DEVICE_WIDTH,DEVICE_HEIGHT } from '../../config/styles';


import images from '../../config/images';

export default class Wallpaper extends Component {
	render() {
		const img = this.props.img ? this.props.img : images.wallpaper;
		return (

			<Image style={{
				flex: 1,
				resizeMode: 'cover',
				height: null,
				width: null,
				backgroundColor: (this.props.gray ? 'rgba(52, 52, 52, 1)' : null) // needs to be fixed with gray overlay
			}} source={img}>
				{this.props.children}
			</Image>
		);




	}
}
