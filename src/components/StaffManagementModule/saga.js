import { takeEvery, takeLatest, put } from 'redux-saga/effects';

function* rootSaga () {
  yield takeLatest('ADD_STAFF', addStaff);
}

function* addStaff () {
  yield put({type: 'ADD_STAFF'});
}

export default rootSaga;