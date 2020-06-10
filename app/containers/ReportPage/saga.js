import { call, put, takeEvery } from 'redux-saga/effects';
import { INITIALIZE_REPORTS } from './constants';
import { setCategoryUrls } from '../App/actions';
import { fetchCategories } from '../App/requests';

function* initialize() {
	const categories = yield call(fetchCategories);
	yield put(setCategoryUrls(categories));
}

// Individual exports for testing
export default function* reportPageSaga() {
	yield takeEvery(INITIALIZE_REPORTS, initialize);
}
