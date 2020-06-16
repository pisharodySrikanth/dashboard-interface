import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { makeSelectCategoryKeys } from '../App/selectors';

/**
 * Direct selector to the reportPage state domain
 */

const selectReportPageDomain = state => state.reportPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectDateDimension = () => createSelector(
  selectReportPageDomain,
  substate => substate.dateDimension
);

const makeSelectDimensions = () => createSelector(
  selectReportPageDomain,
  substate => substate.dimensions
);

const makeSelectFilters = () => createSelector(
  selectReportPageDomain,
  substate => substate.filters
)

const makeGetUnselectedDimensions = () => createSelector(
  makeSelectDimensions(),
  makeSelectCategoryKeys(),
  (dimensions, keys) => {
    const all = keys.concat(['date']);
    return all.filter(d => !dimensions.includes(d)).map(d => ({ text: d }));
  }
);

const makeSelectReportData = () => createSelector(
  selectReportPageDomain,
  substate => substate.reportData
);

const makeGetUnselectedCategories = () => createSelector(
  makeSelectFilters(),
  makeSelectCategoryKeys(),
  (filters, categories) => {
    const filterKeys = Object.keys(filters);
    return categories.filter(c => !filterKeys.includes(c)).map(d => ({text: d}));
  }
);

/**
 * Default selector used by ReportPage
 */

const makeSelectReportPage = () =>
  createSelector(
    selectReportPageDomain,
    substate => substate,
  );

export default makeSelectReportPage;
export {
  selectReportPageDomain,
  makeSelectDateDimension,
  makeSelectDimensions,
  makeGetUnselectedDimensions,
  makeSelectReportData,
  makeGetUnselectedCategories,
  makeSelectFilters
};
