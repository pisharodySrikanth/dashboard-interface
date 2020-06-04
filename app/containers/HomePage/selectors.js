import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the reportPage state domain
 */

const selectCategoryKeys = (state) => {
    const homePage = state.homePage || initialState;

    return Object.keys(homePage.categoryUrls);
};

const selectCategoryUrl = (state, categoryKey) => {
    const homePage = state.homePage || initialState;

    return homePage.categoryUrls[categoryKey] || ''; 
}

const selectCategoryValues = (state, categoryKey) => {
    const homePage = state.homePage || initialState;

    return homePage.categoryData[categoryKey] || []; 
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
    selectCategoryKeys,
    selectCategoryUrl,
    selectCategoryValues
};
