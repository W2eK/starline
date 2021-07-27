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

export const setActivePoi = (id, name) => ({
  type: POI_ACTIVE,
  payload: name ? { id, name } : { id }
});
export const resetActivePoi = () => ({ type: POI_INACTIVE });

export const setCategory = category => ({
  type: SET_CATEGORY,
  payload: category
});

export const resetCategory = () => ({ type: RESET_CATEGORY });

export const setVisible = visible => ({
  type: UPDATE_VISIBLE,
  payload: visible
});
