import { takeEvery, call, put, select } from 'redux-saga/effects';
import { INITIALIZE_CHART } from './constants';
import { setCategoryUrls, setError } from '../App/actions';
import { fetchCategories } from '../App/requests';

function* initialize() {
  const categories = yield call(fetchCategories);
  yield put(setCategoryUrls(categories));
}

// Individual exports for testing
export default function* visualisationPageSaga() {
  yield takeEvery(INITIALIZE_CHART, initialize);
}
