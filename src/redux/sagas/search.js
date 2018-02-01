import { call, fork, put, select, takeLatest, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { searchActions, singleActions, uiActions } from '../actions';
import { getSearchText, getLastSearchQuery, getNext } from '../selectors/ui';
import * as api from '../../api';

export function* performSearch() {
  try {
    yield put(uiActions.setGlobalLoading(true));
    const searchQuery = yield select(getSearchText);
    const searchResult = yield call(api.searchGif, searchQuery);
    yield put(searchActions.getSearchByQuerySuccess(searchResult));
    yield put(searchActions.setLastSearch(searchQuery));
  } catch (e) {
    // TODO: add error handler
  } finally {
    yield delay(300); //Just eye candy, looks better
    yield put(uiActions.setGlobalLoading(false));
  }
}

export function* loadMoreItems() {
  try {
    const lastSearchQuery = yield select(getLastSearchQuery);
    const nextItem = yield select(getNext);
    const results = yield call(api.searchMoreGifs, lastSearchQuery, nextItem);
    yield put(searchActions.loadMoreItemsSuccess(results));
  } catch (e) {
    //TODO: add error handler
  }
}

export function* performSingleSearch({ id }) {
  try {
    yield put(singleActions.resetSingleError());
    yield put(singleActions.clearSingleGif());
    yield put(uiActions.setGlobalLoading(true));
    const result = yield call(api.getSingleById, id);
    if (result.error) {
      yield put(singleActions.getSingleGifFailure(result.error));
    } else {
      yield put(singleActions.getSingleGifSuccess(result));
    }
  } catch (e) {
    yield put(singleActions.getSingleGifFailure(e));
  } finally {
    yield delay(300); //Just eye candy, looks better
    yield put(uiActions.setGlobalLoading(false));
  }
}

export function* watchSearch() {
  yield takeLatest(searchActions.GET_SEARCH_BY_QUERY, performSearch);
  yield takeLatest(searchActions.GET_MORE_SEARCH_RESULTS, loadMoreItems);
}

export function* watchSingle() {
  yield takeLatest(singleActions.GET_SINGLE_GIF, performSingleSearch);
}

export default function* root() {
  yield all([
    fork(watchSearch),
    fork(watchSingle)
  ])
}
