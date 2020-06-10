import { call, put, takeEvery, select } from 'redux-saga/effects';
import { INITIALIZE_REPORTS, SET_CATEGORY_FILTER, APPLY_PARAMS } from './constants';
import { setCategoryUrls } from '../App/actions';
import { fetchCategories } from '../App/requests';
import {getValues} from '../App/saga';
import { fetchReports } from './requests';

function* initialize() {
	const categories = yield call(fetchCategories);
	yield put(setCategoryUrls(categories));
}

function* fetchCategoryData(action) {
	yield call(getValues, {
		category: action.key
	});
}

function* setReports() {
	const state = yield select();
	console.log(state);
	console.log('fetching...');
	const response = yield call(fetchReports, state.reportPage);
}

// Individual exports for testing
export default function* reportPageSaga() {
	yield takeEvery(INITIALIZE_REPORTS, initialize);
	yield takeEvery(SET_CATEGORY_FILTER, fetchCategoryData);
	yield takeEvery(APPLY_PARAMS, setReports);
}
