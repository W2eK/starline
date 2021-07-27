import {
  POI_FETCH,
  POI_FAILED,
  POI_LOADED,
  POI_ACTIVE,
  POI_INACTIVE,
  POI_SEARCH,
  SET_CATEGORY,
  RESET_CATEGORY,
  UPDATE_VISIBLE,
  FREEZE_MAP,
  CHANGE_CAMERA,
  UNFREEZE_MAP
} from './poi-types';
import test from '../../mapboxr-gl/context';

export const poiFetch = payload => (dispatch, getState) => {
  dispatch({ type: POI_FETCH });
  // Wanna be async call
  setTimeout(() => {
    const { visible } = getState().poi;
    const { id, category } = payload;
    const feature = visible[category]?.find(({ id: itemId }) => itemId === id);
    if (feature) {
      dispatch({ type: POI_LOADED, payload: feature.properties });
    } else {
      dispatch({ type: POI_FAILED });
    }
  }, 200 + Math.random() * 500);
};

export const setActivePoi = (id, name, coordinates) => ({
  type: POI_ACTIVE,
  payload: name ? { id, name, coordinates } : { id }
});
export const resetActivePoi = () => ({ type: POI_INACTIVE });

export const setCategory = category => ({
  type: SET_CATEGORY,
  payload: category
});

export const resetCategory = () => ({ type: RESET_CATEGORY });

export const setVisible = visible => (dispatch, getState) => {
  if (!getState().poi.freeze)
    dispatch({ type: UPDATE_VISIBLE, payload: visible });
};

export const freezeMap = () => ({ type: FREEZE_MAP });
export const unfreezeMap = payload => ({ type: UNFREEZE_MAP, payload });
export const changeCamera = payload => ({ type: CHANGE_CAMERA, payload });
export const searchPoi = payload => ({ type: POI_SEARCH, payload });
