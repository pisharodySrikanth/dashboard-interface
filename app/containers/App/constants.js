/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const SET_ERROR = 'dashboard-interface/App/SET_ERROR';
export const SET_CATEGORY_DATA = 'app/App/SET_CATEGORY_DATA';
export const SET_CATEGORIES_URLS = 'app/App/SET_CATEGORIES_URLS';
export const CHANGE_CATEGORY = 'app/App/CHANGE_CATEGORY';
export const SET_CATEGORY_VALUES = 'app/App/SET_CATEGORY_VALUES';
