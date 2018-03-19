
import {createReducer} from '../../utils/reduxHelpers';

const LOGIN = {
  checking: false,
  loading: false,
  user: null
};

export const login = createReducer(LOGIN, {

});
