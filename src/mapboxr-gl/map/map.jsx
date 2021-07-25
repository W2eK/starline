import React, { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import { Provider } from '../context';
import Listeners, { withListeners } from '../listeners';
import isDev, { logger } from '../utils/is-dev';
import cleanUp from '../utils/clean-up';

const MapboxrGL = ({
  children = null,
  view,
  onload,
  onviewport,
  listeners,
  ...rest
}) => {
  const container = useRef(null);
  const [map, setMap] = useState(null);
  /* On Mount */
  logger('map', 'mapbox', 'rendering');
  useEffect(() => {
    if (!container.current) return;
    logger('map', 'mapbox', 'adding');
    const map = new mapboxgl.Map({ ...view, container: container.current });
    // @ts-ignore
    if (isDev()) window.__MAPBOXR_GL_MAP = map;
    map.on('load', () => {
      if (onload) onload(map);
      if (onviewport) setTimeout(() => map.fire('move'));
      setMap(map);
    });
    /* On Unmount */
    return cleanUp(() => map.remove(), 'map', 'mapbox');
  }, []);
  if (onviewport) {
    ['zoom', 'move'].forEach(key =>
      listeners.push({ ['on' + key]: onviewport })
    );
  }
  return (
    <div ref={container} {...rest}>
      {map && (
        <Provider map={map}>
          <Listeners listeners={listeners} />
          {children}
        </Provider>
      )}
    </div>
  );
};

export default withListeners(MapboxrGL);
