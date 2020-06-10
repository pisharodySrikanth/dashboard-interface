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

const selectAppState = state => state.global || initialState;
const selectCategoryUrls = createSelector(
	selectAppState,
	homePage => homePage.categoryUrls
);

// const selectCategoryKeys = createSelector(
//     state => state.categoryUrls,
//     categoryUrls => Object.keys(categoryUrls)
// );

const selectCatUrls = createSelector(
	selectAppState,
	global => global.categoryUrls
);

const makeSelectCategoryKeys = () => createSelector(
	selectCatUrls,
	urls => Object.keys(urls)
);

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
	selectAppState,
	makeSelectLocation,
	selectCatUrls,
	makeSelectCategoryKeys,
	selectCategoryUrl,
	selectCategoryValues,
	selectResource,
	selectCategory
};
