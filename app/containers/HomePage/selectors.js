import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { makeGetSelectedCatValues } from '../App/selectors';

const selectHomePageDomain = state => state.homePage || initialState;

const makeGetSelectedId = () => createSelector(
  selectHomePageDomain,
  state => state.selectedId
);

const makeGetSelectedValue = () => createSelector(
  makeGetSelectedId(),
  makeGetSelectedCatValues(),
  (selectedId, values) => {
    return values.find(v => v.id == selectedId);
  }
)

export {
  makeGetSelectedId,
  makeGetSelectedValue,
};
