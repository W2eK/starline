import {
  SET_CATEGORY,
  RESET_CATEGORY,
  UPDATE_VISIBLE
} from './categories-types';

const initialState = {
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
    default:
      return state;
  }
}

export default categoriesReducer;
