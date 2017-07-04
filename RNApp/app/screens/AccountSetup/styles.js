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
		paddingTop: 60,
		paddingLeft: 5,
		paddingRight: 5,
		backgroundColor: '#0095c1',
	},
	slide1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f4f4f4',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: .3
	},
	slide2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f4f4f4',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: .3
	},
	slide3: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f4f4f4',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: .3
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	}
});
