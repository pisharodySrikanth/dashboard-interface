/*
 *
 * VisualisationPage actions
 *
 */

import {
  INITIALIZE_CHART,
  SET_CATEGORY,
  SET_START_DATE,
  SET_END_DATE,
  SET_GRANULARITY,
  APPLY_PARAMS,
} from './constants';

export function initializeChart() {
  return {
    type: INITIALIZE_CHART,
  };
}

export function setCategory(category) {
  return {
    type: SET_CATEGORY,
    category,
  };
}

export function setStartDate(date) {
  return {
    type: SET_START_DATE,
    date,
  };
}

export function setEndDate(date) {
  return {
    type: SET_END_DATE,
    date,
  };
}

export function setGranularity(granularity) {
  return {
    type: SET_GRANULARITY,
    granularity,
  };
}

export function applyParams() {
  return {
    type: APPLY_PARAMS,
  };
}
