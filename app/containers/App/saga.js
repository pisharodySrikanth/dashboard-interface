import { call, put, select, takeLatest } from 'redux-saga/effects';
import { setCategoryValues } from './actions';
import { setError } from '../App/actions';
import { CHANGE_CATEGORY } from './constants';
import { getCategoryUrls, getCatValues } from './selectors';
import { fetchValues } from './requests';

export function* getValues(action) {
    const catValues = yield select(getCatValues, action.category);

    if (catValues.length) {
        return;
    }

    const categoryUrls = yield select(getCategoryUrls);
    const categoryUrl = categoryUrls[action.category];
    try {
        const catValues = yield call(fetchValues, categoryUrl, categoryUrl);

        yield put(setCategoryValues(action.category, catValues));
    } catch (e) {
        yield put(setError(e));
    }
}

// Individual exports for testing
export default function* globalSaga() {
    yield takeLatest(CHANGE_CATEGORY, getValues);
}
