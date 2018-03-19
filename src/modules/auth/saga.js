
import {call, put, takeLatest} from 'redux-saga/effects';
import {init, startApp} from './reducer';
import Application from '../../navigation';

const login = false;

const at = {
  auth: {screen: 'Auth', title: 'Welcome'},
  home: {screen: 'Home', title: 'Home'}
};

export function * watchStartApp () {
  yield takeLatest(startApp.getType(), workerStartApp);
}

function * workerStartApp (action) {
  yield call(Application.startApp, action.payload);
}

export function * watchInit () {
  yield takeLatest(init.getType(), workerInit);
}

function * workerInit () {
  (login)
    ? yield put(startApp(at.home))
    : yield put(startApp(at.auth));
}
