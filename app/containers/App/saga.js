import { take, call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';

import { setCategoryUrls, setCategoryValues, setCategoryData } from './actions';
import { setError } from '../App/actions';
import { CHANGE_CATEGORY, INITIALIZE_CATEGORY, CHANGE_VALUE, SET_CATEGORY_DATA } from './constants';
import { selectCategoryUrl, selectCategoryValues, selectCategory, selectResource } from './selectors';
import {fetchCategories, fetchValues} from './requests';

function* getValues(action) {
    const catValues = yield select(selectCategoryValues, action.category);

    if (catValues.length) {
        return;
    }

    const categoryUrl = yield select(selectCategoryUrl, action.category);
    try {
        const catValues = yield call(fetchValues, categoryUrl, categoryUrl);

        yield put(setCategoryValues(catValues));
    } catch (e) {
        yield put(setError(e));
    }
}

// Individual exports for testing
export default function* globalSaga() {
    yield takeLatest(CHANGE_CATEGORY, getValues);
}
