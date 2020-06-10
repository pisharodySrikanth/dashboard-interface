/*
 *
 * ReportPage reducer
 *
 */
import produce from 'immer';
import { ADD_DIMENSION, REMOVE_DIMENSION, CHANGE_DATE_DIMENSION } from './constants';

export const initialState = {
	filters: {
		start: '',
		end: ''
	},
	dateDimension: 'day',
	dimensions: ['date']
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
				if(index !== -1) {
					draft.dimensions.splice(index, 1);
				}
				break;
			case CHANGE_DATE_DIMENSION:
				draft.dateDimension = action.dimension;
				break;
		}
	});

export default reportPageReducer;
