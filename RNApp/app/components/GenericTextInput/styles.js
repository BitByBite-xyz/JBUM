import { StyleSheet, Dimensions } from 'react-native';
import { colors,DEVICE_WIDTH } from '../../config/styles';

const window = Dimensions.get('window');
export default StyleSheet.create({
  input: {
    height: 40,
    width: DEVICE_WIDTH - 40,
    borderRadius: 5,
    backgroundColor: colors.inputBackground,
    marginLeft: 10,
    marginVertical: 5,
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,

  },
  divider: {
    height: 1,
    backgroundColor: colors.inputDivider,
    marginLeft: 10,
  },
  inputWrapper: {
    backgroundColor: colors.inputWrapper,

    width: window.width,
  },
});
