import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.router;

const makeSelectLocation = () =>
	createSelector(
		selectRouter,
		routerState => routerState.location,
	);

/**
 * Direct selector to the reportPage state domain
 */

const selectHomePageDomain = state => state.global || initialState;
const selectCategoryUrls = createSelector(
	selectHomePageDomain,
	homePage => homePage.categoryUrls
);

// const selectCategoryKeys = createSelector(
//     state => state.categoryUrls,
//     categoryUrls => Object.keys(categoryUrls)
// );

const selectCategoryKeys = (state) => {
	const global = state.global || initialState;

	return Object.keys(global.categoryUrls);
};

const selectCategoryUrl = (state, categoryKey) => {
	const global = state.global || initialState;

	return global.categoryUrls[categoryKey] || '';
}

const selectCategoryValues = (state, categoryKey) => {
	const global = state.global || initialState;

	return global.categoryData[categoryKey] || [];
}

const selectCategory = state => state.global.selectedCategory;

const selectResource = (state, id) => {
	const global = state.global || initialState;

	const resources = global.categoryData[global.selectedCategory] || [];

	return resources.find(r => r.id === id);
}
/**
 * Other specific selectors
 */

/**
 * Default selector used by ReportPage
 */

// const makeSelectReportPage = () =>
//   createSelector(
//     selectReportPageDomain,
//     substate => substate,
//   );

export {
	makeSelectLocation,
	selectCategoryKeys,
	selectCategoryUrl,
	selectCategoryValues,
	selectResource,
	selectCategory
};
