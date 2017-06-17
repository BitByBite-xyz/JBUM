import {
	StyleSheet,
	Dimensions
}
from 'react-native';
import {
	colors,
	DEVICE_WIDTH,
	DEVICE_HEIGHT
}
from '../../config/styles';

const window = Dimensions.get('window');


export default StyleSheet.create({
	container: {
		marginTop: 80,
		padding: 40,
		backgroundColor: colors.inputBackground,
		borderRadius: 20,
		width: DEVICE_WIDTH - 20,

		justifyContent: 'center',
		marginHorizontal: 10,
		paddingLeft: 45,
	},
	wrapper: {
    backgroundColor: '#009688',
  },
	slide1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#e91e63',
	},
	slide2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#673ab7',
	},
	slide3: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#3f51b5',
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	}
});
