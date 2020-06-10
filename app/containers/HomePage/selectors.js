import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the reportPage state domain
 */

const selectHomePageDomain = state => state.homePage || initialState;
const selectCategoryUrls = createSelector(
    selectHomePageDomain,
    homePage => homePage.categoryUrls
);
    
// const selectCategoryKeys = createSelector(
//     state => state.categoryUrls,
//     categoryUrls => Object.keys(categoryUrls)
// );

const selectCategoryKeys = (state) => {
    const homePage = state.global || initialState;

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

const selectCategory = state => state.homePage.selectedCategory;

const selectResource = (state, id) => {
    const homePage = state.homePage || initialState;

    const resources = homePage.categoryData[homePage.selectedCategory] || []; 

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
    selectCategoryKeys,
    selectCategoryUrl,
    selectCategoryValues,
    selectResource,
    selectCategory
};
