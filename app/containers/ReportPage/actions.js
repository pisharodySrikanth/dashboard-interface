/*
 *
 * ReportPage actions
 *
 */

import { INITIALIZE_REPORTS, ADD_DIMENSION, REMOVE_DIMENSION, CHANGE_DATE_DIMENSION, SET_CATEGORY_FILTER, REMOVE_FILTER } from './constants';

export function initializeReports() {
	return {
		type: INITIALIZE_REPORTS,
	};
}

export function addDimension(dimension) {
	return {
		type: ADD_DIMENSION,
		dimension
	}
}

export function removeDimension(dimension) {
	return {
		type: REMOVE_DIMENSION,
		dimension
	}
}

export function changeDateDimension(dimension) {
	return {
		type: CHANGE_DATE_DIMENSION,
		dimension
	}
}

export function setCategoryFilter(key, value) {
	return {
		type: SET_CATEGORY_FILTER,
		key,
		value
	}
}

export function removeFilter(key) {
	return {
		type: REMOVE_FILTER,
		key
	}
}