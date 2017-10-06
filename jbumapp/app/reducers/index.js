import { combineReducers } from 'redux';

import nav from './nav';
import network from './network';
import notification from './notification';
import quote from './quote';

export default combineReducers({
  nav,
  network,
  notification,
  quote
})
