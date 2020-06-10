/*
 *
 * App actions
 *
 */

import { SET_ERROR } from '../App/constants';
import { CHANGE_CATEGORY, SET_CATEGORY_VALUES, SET_CATEGORIES_URLS, SET_CATEGORY_DATA } from './constants';

export function setError(errorData) {
    return {
        type: SET_ERROR,
        errorData
    }
}

export function setCategoryData(selectedCategory, values, selectedId) {
	return {
		type: SET_CATEGORY_DATA,
		selectedCategory,
		values,
		selectedId
	};
}

export function changeCategory(category) {
	return {
		type: CHANGE_CATEGORY,
		category
	};
}

export function setCategoryUrls(categoryUrls) {
	return {
		type: SET_CATEGORIES_URLS,
		categoryUrls
	}
}

export function setCategoryValues(category, values) {
	return {
		type: SET_CATEGORY_VALUES,
		category,
		values
	}
}