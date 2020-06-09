/*
 *
 * HomePage actions
 *
 */

import { INITIALIZE_DASHBOARD, CHANGE_VALUE } from './constants';

export function initializeDashboard(category, id) {
	return {
		type: INITIALIZE_DASHBOARD,
		category,
		id
	};
}

export function changeValue(value) {
	return {
		type: CHANGE_VALUE,
		value
	};
}
