/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { SET_ERROR } from './constants';
import { CHANGE_CATEGORY, SET_CATEGORIES_URLS, SET_CATEGORY_VALUES, SET_CATEGORY_DATA } from './constants';

// The initial state of the App
export const initialState = {
    loading: false,
    error: false,
    errorData: {},
    categoryUrls: {},
    categoryData: {},
    selectedCategory: ''
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case SET_ERROR:
                draft.error = true;
                draft.errorData = action.errorData || {};
                console.log(action.errorData);
                break;
            case SET_CATEGORY_DATA:
                draft.selectedCategory = action.selectedCategory;
                draft.categoryData[action.selectedCategory] = action.values;
                break;
            case CHANGE_CATEGORY:
                draft.selectedCategory = action.category;
                break;
            case SET_CATEGORY_VALUES:
                draft.categoryData[draft.selectedCategory] = action.values;
                break;
            case SET_CATEGORIES_URLS:
                draft.categoryUrls = action.categoryUrls;
                break;
        }
    });

export default appReducer;
