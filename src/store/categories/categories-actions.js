import {
  SET_CATEGORY,
  RESET_CATEGORY,
  UPDATE_VISIBLE,
  SET_HOVER_ITEM,
  RESET_HOVER_ITEM
} from './categories-types';

export const setCategory = category => ({
  type: SET_CATEGORY,
  payload: category
});

export const resetCategory = () => ({ type: RESET_CATEGORY });

export const setHoverItem = category => ({
  type: SET_HOVER_ITEM,
  payload: category
});

export const resetHoverItem = () => ({ type: RESET_HOVER_ITEM });

export const setVisible = visible => ({
  type: UPDATE_VISIBLE,
  payload: visible
});
