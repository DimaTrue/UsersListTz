import { put, takeEvery, all } from 'redux-saga/effects';

import { getUsersList } from 'api-client/users';
import {
  GET_USERS_INIT,
  getUsersListSuccess,
  getUsersListFailure,
} from '../reducers/users';

export function* watchGetUsers() {
  yield takeEvery(GET_USERS_INIT, getUsers);
}

export function* getUsers() {
  try {
    const result = yield getUsersList();
    yield put(getUsersListSuccess(result.data));
  } catch (error) {
    yield put(getUsersListFailure(error));
  }
}

export default function* users() {
  yield all([watchGetUsers()]);
}
