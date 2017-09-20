import {CHANGE_NOTIFICATION_STATUS} from '../actions/notification';

const initialState = {
  shouldHandleNotification: false,
  notificationData: null
};

const shouldHandle = (status) => {
  if (status) {
    return true;
  }
  return false;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NOTIFICATION_STATUS:
      return {
        ...state,
        shouldHandleNotification: shouldHandle(action.status),
        notificationData: action.status,
      }
      break;
    default:
      return state;

  }
  return state;
}
