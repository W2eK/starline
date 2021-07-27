import {
  POI_FETCH,
  POI_FAILED,
  POI_LOADED,
  POI_ACTIVE,
  POI_INACTIVE,
  SET_CATEGORY,
  RESET_CATEGORY,
  UPDATE_VISIBLE
} from './poi-types';

const initialState = {
  id: null,
  name: null,
  category: null,
  item: null,
  loading: false,
  error: false,
  visible: {}
};

function PoiReducer(state = initialState, { type, payload }) {
  switch (type) {
    case POI_FETCH:
      return { ...state, item: null, loading: true, error: false };
    case POI_LOADED:
      return { ...state, item: payload, loading: false, error: false };
    case POI_FAILED:
      return { ...state, item: null, loading: false, error: true };
    case POI_ACTIVE:
      return { ...state, ...payload };
    case POI_INACTIVE:
      return { ...state, id: null, name: null };
    case SET_CATEGORY:
      return { ...state, category: payload };
    case RESET_CATEGORY:
      return { ...state, category: null };
    case UPDATE_VISIBLE:
      return { ...state, visible: payload };
    default:
      return state;
  }
}

export default PoiReducer;
