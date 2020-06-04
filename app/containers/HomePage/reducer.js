/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import { CHANGE_CATEGORY, CHANGE_VALUE, SET_CATEGORIES_URLS, SET_CATEGORY_VALUES, SET_DASHBOARD_DATA } from './constants';

export const initialState = {
	categoryUrls: {},
	categoryData: {},
	selectedCategory: '',
	selectedId: ''
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case SET_DASHBOARD_DATA:
				draft.selectedCategory = action.selectedCategory;
				draft.categoryData[action.selectedCategory] = action.values;
				draft.selectedId = action.selectedId;
				break;
			case CHANGE_CATEGORY:
				draft.selectedCategory = action.category;
				draft.selectedId = '';
				break;
			case SET_CATEGORY_VALUES:
				draft.categoryData[draft.selectedCategory] = action.values;
				break;
			case CHANGE_VALUE:
				draft.selectedId = action.value;
				break;
			case SET_CATEGORIES_URLS:
				draft.categoryUrls = action.categoryUrls;
				break;
		}
	});

export default homePageReducer;
