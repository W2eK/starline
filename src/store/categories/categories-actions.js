import { SET_CATEGORY, RESET_CATEGORY } from './categories-types';

export const setCategory = category => ({
  type: SET_CATEGORY,
  payload: category
});

export const resetCategory = () => ({ type: RESET_CATEGORY });
