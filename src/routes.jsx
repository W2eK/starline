import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  setCategory,
  resetCategory,
  setActivePoi,
  resetActivePoi
} from './store/poi';

import categories from './categories';

function RouterStore() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [, category, id] = location.pathname.split('/');
  useEffect(() => {
    if (category) {
      dispatch(setCategory(categories[category]));
    } else {
      dispatch(resetCategory());
    }
  }, [dispatch, category]);

  useEffect(() => {
    if (id) {
      dispatch(setActivePoi(parseInt(id)));
    } else {
      dispatch(resetActivePoi());
    }
  }, [dispatch, id]);
  return null;
}

export default RouterStore;
