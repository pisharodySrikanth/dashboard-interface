/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import { CHANGE_VALUE } from './constants';
import { CHANGE_CATEGORY, SET_CATEGORY_DATA } from '../App/constants';

export const initialState = {
	selectedId: ''
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case CHANGE_VALUE:
				draft.selectedId = action.value;
				break;
			case SET_CATEGORY_DATA:
				draft.selectedId = action.selectedId;
				break;
			case CHANGE_CATEGORY:
				draft.selectedId = '';
				break;
		}
	});

export default homePageReducer;
