import {
  POI_FETCH,
  POI_FAILED,
  POI_LOADED,
  POI_ACTIVE,
  POI_INACTIVE
} from './poi-types';

export const poiFetch = payload => (dispatch, getState) => {
  dispatch({ type: POI_FETCH });
  // Wanna be async call
  setTimeout(() => {
    const { visible } = getState().categories;
    const { id, category } = payload;
    const feature = visible[category]?.find(({ id: itemId }) => itemId === id);
    if (!feature) {
      dispatch({ type: POI_FAILED });
    } else {
      dispatch({ type: POI_LOADED, payload: feature });
    }
  }, 200 + Math.random() * 500);
};

export const setActivePoi = (id, category, name) => ({
  type: POI_ACTIVE,
  payload: { id, category, name }
});
export const resetActivePoi = () => ({ type: POI_INACTIVE });
