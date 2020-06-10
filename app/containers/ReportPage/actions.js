/*
 *
 * ReportPage actions
 *
 */

import { INITIALIZE_REPORTS, ADD_DIMENSION, REMOVE_DIMENSION, CHANGE_DATE_DIMENSION, SET_CATEGORY_FILTER, REMOVE_FILTER, SET_START_DATE, SET_END_DATE, APPLY_PARAMS, SET_REPORT_DATA } from './constants';

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

export function setStartDate(date) {
	return {
		type: SET_START_DATE,
		date
	};
}

export function setEndDate(date) {
	return {
		type: SET_END_DATE,
		date
	};
}

export function applyParams() {
	return {
		type: APPLY_PARAMS
	};
}

export function setReportData(data) {
	return {
		type: SET_REPORT_DATA,
		data
	}
}