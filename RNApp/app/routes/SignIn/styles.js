import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

const window = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: colors.background,
    flexDirection: 'column',

  },
  buttons: {
    flexDirection: 'row',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch', // or 'stretch'
  },
  error: {
    height: 28,
    justifyContent: 'center',
    width: window.width,
    alignItems: 'center',
  },
  errorText: {
    color: colors.errorText,
    fontSize: 14,
  },
  header: {
    marginBottom: 25,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Avenir-Light',
    fontSize: 26,
    backgroundColor: 'transparent',
  },
  textBold: {
    color: 'white',
		fontFamily: 'Avenir-Heavy',
    fontSize: 26,
		backgroundColor: 'transparent',
  }
});
