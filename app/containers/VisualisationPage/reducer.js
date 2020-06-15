/*
 *
 * VisualisationPage reducer
 *
 */
import produce from 'immer';
import { SET_RESOURCES, APPLY_PARAMS } from './constants';

export const initialState = {
  start: new Date(),
  end: new Date(),
  granularity: 'day',
  category: '',
  resources: [],
};

/* eslint-disable default-case, no-param-reassign */
const visualisationPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_RESOURCES:
        draft.resources = action.resources;
        break;
      case APPLY_PARAMS:
        draft.start = action.params.start;
        draft.end = action.params.end;
        draft.granularity = action.params.granularity;
        draft.category = action.params.category;
        break;
    }
  });

export default visualisationPageReducer;
