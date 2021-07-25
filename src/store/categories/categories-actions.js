import {
  SET_CATEGORY,
  RESET_CATEGORY,
  UPDATE_VISIBLE
} from './categories-types';

export const setCategory = category => ({
  type: SET_CATEGORY,
  payload: category
});

export const resetCategory = () => ({ type: RESET_CATEGORY });

export const setVisible = visible => ({
  type: UPDATE_VISIBLE,
  payload: visible
});
