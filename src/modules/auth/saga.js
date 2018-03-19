
import {call, put} from 'redux-saga/effects';
import {takeFirst} from '../../utils/sagaHelpers';
import {init, startApp} from './action';
import Application from '../../navigation';

const login = false;

const at = {
  auth: {screen: 'Auth', title: 'Welcome'},
  home: {screen: 'Home', title: 'Home'}
};

export function * watchStartApp () {
  yield takeFirst(startApp.getType(), workerStartApp);
}

function * workerStartApp (action) {
  yield call(Application.startApp, action.payload);
}

export function * watchInit () {
  yield takeFirst(init.getType(), workerInit);
}

function * workerInit () {
  login
    ? yield put(startApp(at.home))
    : yield put(startApp(at.auth));
}
