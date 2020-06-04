import { take, call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { matchPath } from 'react-router-dom';
import { setCategoryUrls, setCategoryValues, setDashboardData } from './actions';
import { setError } from '../App/actions';
import { CHANGE_CATEGORY, INITIALIZE_DASHBOARD } from './constants';
import { selectCategoryUrl, selectCategoryValues } from './selectors';
import axios from 'axios';

const fetchCategories = () => {
    return axios.get('https://swapi.dev/api/').then(r => r.data);
}

const fetchValues = (fetchUrl, categoryUrl) => {
    return fetchValueSet(fetchUrl, categoryUrl).then(({ next, results = [] }) => {
        if (!next) {
            return results;
        }
        
        return fetchValues(next, categoryUrl).then(arr => results.concat(arr));
    });
}

const fetchValueSet = (fetchUrl, categoryUrl) => {  //categoryUrl passed separately for extracting id from resource url
    return axios.get(fetchUrl).then(r => {
        return {
            next: r.data.next,
            results: r.data.results.map(({ name, title, ...r }) => {
                const urlFormat = `${categoryUrl}:id`;
                const match = matchPath(r.url, urlFormat);
                const result = {
                    ...r,
                    name: name || title // setting name in place of title for consistency across different categories
                };

                if (match) {
                    const {
                        params: {
                            id
                        }
                    } = match;
                    result.id = id;
                }

                return result;
            })
        };
    });
};

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
        yield put(setDashboardData(category, catValues, id));
    } catch (e) {
        yield put(setError(e));
    }
}

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
export default function* homePageSaga() {
    yield takeEvery(INITIALIZE_DASHBOARD, initialize);
    yield takeLatest(CHANGE_CATEGORY, getValues);
}
