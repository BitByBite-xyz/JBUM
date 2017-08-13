import { StyleSheet, Dimensions } from 'react-native';
import { colors,DEVICE_WIDTH,DEVICE_HEIGHT } from '../../config/styles';

const window = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    marginTop: '38%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: colors.background,
    flexDirection: 'column'
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: 10
  },
  socialMediaButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  textForms: {
      marginBottom: 10
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch' // or 'stretch'
  },
  error: {
    height: 28,
    justifyContent: 'center',
    width: window.width,
    alignItems: 'center'
  },
  errorText: {
    color: colors.errorText,
    fontSize: 14
  },
  header: {
    marginBottom: 70,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontFamily: 'Avenir-Light',
    fontSize: 26,
    backgroundColor: 'transparent'
  },
  textBold: {
    color: 'white',
		fontFamily: 'Avenir-Heavy',
    fontSize: 26,
		backgroundColor: 'transparent'
  },
  contactUsContainer: {
    marginTop: '5%',
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30
  },
  contactUsText: {
    color: 'white',
    fontFamily: 'Avenir-Light',
    backgroundColor: 'transparent',
    letterSpacing: 1.6
  },
  contactUsText2: {
    color: '#fca314',
    fontFamily: 'Avenir-Heavy',
    backgroundColor: 'transparent',
    fontWeight: '900',
    letterSpacing: 1.6
  }
});
