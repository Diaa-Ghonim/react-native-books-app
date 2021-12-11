import {all, call, fork, put, takeLatest} from 'redux-saga/effects';

import {getBooksFail, getBooksPending, getBooksSuccess} from '../../actions';
import {GET_BOOKS} from '../../actions/books/action.types';
import {getBooksAPI} from '../../services';
import {GetBooksRequestSuccessResponse} from '../../types';

export function* getBooks() {
  try {
    yield put(getBooksPending());
    const data: GetBooksRequestSuccessResponse = yield call(getBooksAPI);
    // if (response) {
    yield put(getBooksSuccess(data));
    // } else {
    //   console.log(error, 'error error');
    //   yield put(getBooksFail(error));
    // }
  } catch (error: any) {
    console.log(error, 'error error');
    yield put(getBooksFail(error));
  }
}

function* watchGetBooksSaga() {
  yield takeLatest(GET_BOOKS.ACTION, getBooks);
}

export function* booksSagas() {
  yield all([fork(watchGetBooksSaga)]);
}
