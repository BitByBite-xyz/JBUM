import { combineReducers } from 'redux';

import nav from './nav';
import network from './network';
import notification from './notification';

export default combineReducers({
  nav,
  network,
  notification
})
