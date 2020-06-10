import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { selectAppState, makeSelectCategoryKeys } from '../App/selectors';

/**
 * Direct selector to the reportPage state domain
 */

const selectReportPageDomain = state => state.reportPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectMenuList = () => createSelector(
	makeSelectCategoryKeys(),
	keys => keys.map(k => ({
		text: k
	}))
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
	makeSelectMenuList
};
