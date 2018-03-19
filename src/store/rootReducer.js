import { combineReducers } from 'redux';

import * as authReducers from '../modules/auth/reducer';

export default combineReducers({
  ...authReducers
});
