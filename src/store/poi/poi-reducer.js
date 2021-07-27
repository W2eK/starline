import {
  POI_FETCH,
  POI_FAILED,
  POI_LOADED,
  POI_ACTIVE,
  POI_INACTIVE,
  SET_CATEGORY,
  RESET_CATEGORY,
  UPDATE_VISIBLE,
  FREEZE_MAP,
  UNFREEZE_MAP,
  CHANGE_CAMERA
} from './poi-types';

const initialState = {
  id: null,
  name: null,
  category: null,
  item: null,
  loading: false,
  error: false,
  visible: {},
  camera: {},
  movementCamera: {},
  frozenCamera: {},
  freeze: false
};

function PoiReducer(state = initialState, { type, payload }) {
  switch (type) {
    case POI_FETCH:
      return { ...state, item: null, loading: true, error: false };
    case POI_LOADED:
      return { ...state, item: payload, loading: false, error: false };
    case POI_FAILED:
      return { ...state, item: null, loading: false, error: true };
    case POI_ACTIVE: {
      const { coordinates, ...rest } = payload;
      if (coordinates) {
        return {
          ...state,
          ...rest,
          movementCamera: { ...state.frozenCamera, coordinates }
        };
      } else {
        return {
          ...state,
          ...rest,
          movementCamera: {
            ...state.movementCamera,
            zoom: 17,
            pitch: 30,
            bearing: 15 - Math.random() * 30
          }
        };
      }
    }
    case POI_INACTIVE:
      return { ...state, id: null, name: null };
    case SET_CATEGORY:
      return { ...state, category: payload };
    case RESET_CATEGORY:
      return { ...state, category: null, id: null };
    case UPDATE_VISIBLE:
      return { ...state, visible: payload };
    case FREEZE_MAP:
      return { ...state, freeze: true, frozenCamera: { ...state.camera } };
    case UNFREEZE_MAP:
      return {
        ...state,
        freeze: !!payload,
        movementCamera: { ...state.frozenCamera },
        id: null
      };
    case CHANGE_CAMERA:
      return { ...state, camera: payload };
    default:
      return state;
  }
}

export default PoiReducer;
