/*
 *
 * VisualisationPage reducer
 *
 */
import produce from 'immer';
import {
  INITIALIZE_CHART,
  SET_CATEGORY,
  SET_START_DATE,
  SET_END_DATE,
  SET_GRANULARITY,
  APPLY_PARAMS,
} from './constants';

export const initialState = {
  start: new Date(),
  end: new Date(),
  granularity: 'day',
  category: '',
};

/* eslint-disable default-case, no-param-reassign */
const visualisationPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_START_DATE:
        draft.start = action.date;
        break;
      case SET_END_DATE:
        draft.end = action.date;
        break;
      case SET_CATEGORY:
        draft.category = action.category;
        break;
      case SET_GRANULARITY:
        draft.granularity = action.granularity;
        break;
    }
  });

export default visualisationPageReducer;
