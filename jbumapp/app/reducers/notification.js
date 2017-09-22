import {CHANGE_NOTIFICATION_NUMBER} from '../actions/notification';
import _ from 'lodash';

const initialState = {
  numberOfNotificatons: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NOTIFICATION_NUMBER:
      return {
        ...state,
        numberOfNotificatons: action.number,
      }
      break;
    default:
      return state;
  }
  return state;
}
