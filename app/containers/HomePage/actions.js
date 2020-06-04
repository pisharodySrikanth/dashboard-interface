/*
 *
 * HomePage actions
 *
 */

import { CHANGE_CATEGORY, CHANGE_VALUE, SET_CATEGORY_VALUES, SET_CATEGORIES_URLS, INITIALIZE_DASHBOARD, SET_DASHBOARD_DATA } from './constants';

export function initializeDashboard(category, id) {
	return {
		type: INITIALIZE_DASHBOARD,
		category,
		id
	};
}

export function setDashboardData(selectedCategory, values, selectedId) {
	return {
		type: SET_DASHBOARD_DATA,
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

export function changeValue(value) {
	return {
		type: CHANGE_VALUE,
		value
	};
}

export function setCategoryUrls(categoryUrls) {
	return {
		type: SET_CATEGORIES_URLS,
		categoryUrls
	}
}

export function setCategoryValues(values) {
	return {
		type: SET_CATEGORY_VALUES,
		values
	}
}