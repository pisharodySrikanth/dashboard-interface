import { call, put, select, takeEvery } from 'redux-saga/effects';
import { setError } from '../App/actions';
import axios from 'axios';
import config from '../../config';
import { INITIALIZE_DASHBOARD, CHANGE_VALUE } from './constants';
import { setCategoryUrls, setCategoryData } from '../App/actions';
import { selectCategory, selectResource } from '../App/selectors';
import { fetchCategories, fetchValues } from '../App/requests';

function postImpression(categoryKey, resource) {
    return axios.post(`${config.phpBase}/${categoryKey}/impressions`, {
        swapiId: resource.id,
        resourceName: resource.name
    }).then(r => r.data);
}

function* setImpression(action) {
    const category = yield select(selectCategory);
    const resource = yield select(selectResource, action.value);
    try {
        yield call(postImpression, category, resource);
    } catch (e) {
        yield put(setError(e));
    }
}

function* initialize(action) {
    const categories = yield call(fetchCategories);
    yield put(setCategoryUrls(categories));
    const {
        category,
        id
    } = action;

    if (!category || !id || !Object.keys(categories).includes(category)) {
        return;
    }

    const categoryUrl = categories[category];

    try {
        const catValues = yield call(fetchValues, categoryUrl, categoryUrl);
        yield put(setCategoryData(category, catValues, id));
        yield call(setImpression, {
            value: id
        });
    } catch (e) {
        yield put(setError(e));
    }
}

// Individual exports for testing
export default function* homePageSaga() {
    // yield takeEvery(INITIALIZE_DASHBOARD, initialize);
    // yield takeLatest(CHANGE_CATEGORY, getValues);
    yield takeEvery(INITIALIZE_DASHBOARD, initialize);
    yield takeEvery(CHANGE_VALUE, setImpression);
}
