import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import { INITIALIZE_CHART, APPLY_PARAMS } from './constants';
import { setCategoryUrls, setError } from '../App/actions';
import { setResources } from './actions';
import { fetchCategories } from '../App/requests';
import { fetchResources } from './requests';

function* initialize() {
  const categories = yield call(fetchCategories);
  yield put(setCategoryUrls(categories));
}

function* setResourceData(action) {
  let response;

  try {
    response = yield call(fetchResources, action.params);
  } catch (e) {
    yield put(setError(e));
  }

  yield put(setResources(response.data));
}

// Individual exports for testing
export default function* visualisationPageSaga() {
  yield takeEvery(INITIALIZE_CHART, initialize);
  yield takeLatest(APPLY_PARAMS, setResourceData);
}
