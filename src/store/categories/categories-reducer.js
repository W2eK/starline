import {
  SET_CATEGORY,
  RESET_CATEGORY,
  UPDATE_VISIBLE,
  SET_HOVER_ITEM,
  RESET_HOVER_ITEM
} from './categories-types';

const initialState = {
  hover: null,
  current: null,
  visible: {}
};

function categoriesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_CATEGORY:
      return { ...state, current: payload };
    case RESET_CATEGORY:
      return { ...state, current: null };
    case UPDATE_VISIBLE:
      return { ...state, visible: payload };
    case SET_HOVER_ITEM:
      return { ...state, hover: payload };
    case RESET_HOVER_ITEM:
      return { ...state, hover: null };
    default:
      return state;
  }
}

export default categoriesReducer;
