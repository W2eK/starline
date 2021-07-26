import { useRef, useEffect } from 'react';
import { withMap } from '../context';
import isEqual from '../utils/deep-equal';

function Features({ map, source, sourceLayer, data }) {
  const prev = useRef([]);
  if (!isEqual(data, prev.current)) {
    const updates = data.filter((item, i) => prev.current[i] !== item);
    updates.forEach(({ id, ...item }) => {
      map.setFeatureState({ id, source, sourceLayer }, item);
    });
    prev.current = data;
  }
  return null;
}

export default withMap(Features);
