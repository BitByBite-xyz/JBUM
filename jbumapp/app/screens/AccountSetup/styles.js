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
		paddingLeft: 45
	},
	wrapper: {
		paddingTop: 60,
		paddingLeft: 5,
		paddingRight: 5,
		backgroundColor: '#0095c1'
	},
	slide1: {
		flex: 1,
		height: '95%',
		marginLeft: '2%',
		marginRight: '2%',
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
		height: '95%',
		marginLeft: '2%',
		marginRight: '2%',
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
		height: '95%',
		marginLeft: '2%',
		marginRight: '2%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f4f4f4',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: .3
	},
	slide4: {
		flex: 1,
		height: '95%',
		marginLeft: '2%',
		marginRight: '2%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(209,209,209,0.3)',
		borderRadius: 10,
		paddingLeft: 30,
		paddingRight: 30,
		shadowColor: '#000'
	},
	congratsHeader: {
		fontSize: 60,
		paddingBottom: 30,
		color: 'rgba(239, 239, 239, 0.5)'
	},
	congratsBody: {
		fontSize: 20,
		paddingBottom: 30,
		color: 'rgba(239, 239, 239, 0.5)'
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold'
	},
	getStarted: {
		fontSize: 35,
		color: 'lightblue'
	}
});
