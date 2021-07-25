import React, { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import { Provider } from '../context';
import isDev, { logger } from '../utils/is-dev';
import cleanUp from '../utils/clean-up';

const MapboxrGL = ({ children = null, view, ...rest }) => {
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
    map.on('load', () => setMap(map));
    /* On Unmount */
    return cleanUp(() => map.remove(), 'map', 'mapbox');
  }, []);
  return (
    <div ref={container} {...rest}>
      {map && <Provider map={map}>{children}</Provider>}
    </div>
  );
};

export default MapboxrGL;
