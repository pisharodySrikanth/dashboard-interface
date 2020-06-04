/*
 *
 * App actions
 *
 */

import { SET_ERROR } from '../App/constants';

export function setError(errorData) {
    return {
        type: SET_ERROR,
        errorData
    }
}