/*
 *
 * VisualisationPage actions
 *
 */

import { INITIALIZE_CHART, APPLY_PARAMS, SET_RESOURCES } from './constants';

export function initializeChart() {
  return {
    type: INITIALIZE_CHART,
  };
}

export function setResources(resources) {
  return {
    type: SET_RESOURCES,
    resources,
  };
}

export function applyParams(params) {
  return {
    type: APPLY_PARAMS,
    params,
  };
}
