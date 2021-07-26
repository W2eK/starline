import { POI_FETCH, POI_FAILED, POI_LOADED } from './poi-types';

const initialState = {
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
    default:
      return state;
  }
}

export default PoiReducer;
