import { StyleSheet, Dimensions } from 'react-native';
import { colors,DEVICE_WIDTH } from '../../config/styles';

const window = Dimensions.get('window');
export default StyleSheet.create({
  input: {
		backgroundColor: colors.inputBackground,
		width: DEVICE_WIDTH - 40,
		height: 40,
		marginHorizontal: 25,
		paddingLeft: 45,
		borderRadius: 20,
		color: 'white',
		fontFamily: 'Avenir-light',
		fontSize: 14,
    marginBottom: 5
	},
  divider: {
    height: 2,
    backgroundColor: colors.inputDivider,
    marginLeft: 10
  },
  inputWrapper: {
    backgroundColor: colors.inputWrapper,
    width: window.width
  },
  image: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9
  },
});
