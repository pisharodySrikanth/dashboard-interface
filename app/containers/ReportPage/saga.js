import { call, put, takeEvery, select } from 'redux-saga/effects';
import {
  INITIALIZE_REPORTS,
  SET_CATEGORY_FILTER,
  APPLY_PARAMS,
} from './constants';
import { setCategoryUrls, setError } from '../App/actions';
import { fetchCategories } from '../App/requests';
import { getValues } from '../App/saga';
import { fetchReports } from './requests';
import { setReportData } from './actions';
import {selectReportPageDomain} from './selectors';

function* initialize() {
  const categories = yield call(fetchCategories);
  yield put(setCategoryUrls(categories));
}

function* fetchCategoryData(action) {
  yield call(getValues, {
    category: action.key,
  });
}

function* setReports() {
  const reportPage = yield select(selectReportPageDomain);
  let response;

  try {
    response = yield call(fetchReports, reportPage);
  } catch (e) {
    yield put(setError(e));
  }

  yield put(setReportData(response.data));
}

// Individual exports for testing
export default function* reportPageSaga() {
  yield takeEvery(INITIALIZE_REPORTS, initialize);
  yield takeEvery(SET_CATEGORY_FILTER, fetchCategoryData);
  yield takeEvery(APPLY_PARAMS, setReports);
}
