import { call, put, takeEvery } from 'redux-saga/effects';
import { INITIALIZE_REPORTS, SET_CATEGORY_FILTER } from './constants';
import { setCategoryUrls } from '../App/actions';
import { fetchCategories } from '../App/requests';
import {getValues} from '../App/saga';

function* initialize() {
	const categories = yield call(fetchCategories);
	yield put(setCategoryUrls(categories));
}

function* fetchCategoryData(action) {
	yield call(getValues, {
		category: action.key
	});
}

// Individual exports for testing
export default function* reportPageSaga() {
	yield takeEvery(INITIALIZE_REPORTS, initialize);
	yield takeEvery(SET_CATEGORY_FILTER, fetchCategoryData);
}
