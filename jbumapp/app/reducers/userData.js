import {CHANGE_LOGIN_STATUS} from '../actions/network';

const initialState = {
  loggedIn: false,
  hasCheckedLogin: false
};



export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN_STATUS:
      return {
        ...state,
        hasCheckedLogin: true,
        loggedIn: action.status,
      }
      break;
    default:
      return state;

  }
  return state;
}