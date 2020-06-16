import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAppState = state => state.global || initialState;

const makeSelectCategoryKeys = () => createSelector(
  getCategoryUrls,
  urls => Object.keys(urls)
);

const makeGetSelectedCatValues = () => createSelector(
  selectAppState,
  state => {
    const {
      categoryData,
      selectedCategory
    } = state;
    return categoryData[selectedCategory] || [];
  }
);

const getCategoryUrls = createSelector(
  selectAppState,
  homePage => homePage.categoryUrls
);

const getCatValues = createSelector(
  selectAppState,
  (state, category) => category,
  (state, category) => state.categoryData[category] || []
);

const getSelectedCategory = createSelector(
  selectAppState,
  state => state.selectedCategory
);

const getCategoryData = createSelector(
  selectAppState,
  state => state.categoryData
);

const getResource = createSelector(
  makeGetSelectedCatValues(),
  (state, selectedId) => selectedId,
  (values, selectedId) => {
    return values.find(v => v.id == selectedId);
  }
);

export {
  selectAppState,
  getCatValues,
  getCategoryUrls,
  getSelectedCategory,
  getResource,
  getCategoryData,
  makeGetSelectedCatValues,
  makeSelectCategoryKeys
};
