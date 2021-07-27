import {
  POI_FETCH,
  POI_FAILED,
  POI_LOADED,
  POI_ACTIVE,
  POI_INACTIVE
} from './poi-types';

const initialState = {
  id: null,
  name: null,
  category: null,
  item: null,
  loading: false,
  error: false
};

function PoiReducer(state = initialState, { type, payload }) {
  switch (type) {
    case POI_FETCH:
      return { item: null, loading: true, error: false };
    case POI_LOADED:
      return { item: payload, loading: false, error: false };
    case POI_FAILED:
      return { item: null, loading: false, error: true };
    case POI_ACTIVE:
      return { ...state, ...payload };
    case POI_INACTIVE:
      return { ...state, id: null, name: null, category: null };
    default:
      return state;
  }
}

export default PoiReducer;
