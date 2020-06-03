import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the visualisationPage state domain
 */

const selectVisualisationPageDomain = state =>
  state.visualisationPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by VisualisationPage
 */

const makeSelectVisualisationPage = () =>
  createSelector(
    selectVisualisationPageDomain,
    substate => substate,
  );

export default makeSelectVisualisationPage;
export { selectVisualisationPageDomain };
