/*
 *
 * ReportPage reducer
 *
 */
import produce from 'immer';
import { ADD_DIMENSION, REMOVE_DIMENSION, CHANGE_DATE_DIMENSION, SET_CATEGORY_FILTER, REMOVE_FILTER, SET_START_DATE, SET_END_DATE, SET_REPORT_DATA } from './constants';

export const initialState = {
	startDate: new Date(),
	endDate: new Date(),
	filters: {},
	dateDimension: 'day',
	dimensions: ['date'],
	reportData: null
};

/* eslint-disable default-case, no-param-reassign */
const reportPageReducer = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case ADD_DIMENSION:
				draft.dimensions.push(action.dimension);
				break;
			case REMOVE_DIMENSION:
				const index = draft.dimensions.indexOf(action.dimension);
				if (index !== -1) {
					draft.dimensions.splice(index, 1);
				}
				break;
			case CHANGE_DATE_DIMENSION:
				draft.dateDimension = action.dimension;
				break;
			case SET_CATEGORY_FILTER:
				draft.filters[action.key] = action.value;
				break;
			case REMOVE_FILTER:
				delete draft.filters[action.key];
				break;
			case SET_START_DATE:
				draft.startDate = action.date;
				break;
			case SET_END_DATE:
				draft.endDate = action.date;
				break;
			case SET_REPORT_DATA:
				draft.reportData = action.data;
		}
	});

export default reportPageReducer;
