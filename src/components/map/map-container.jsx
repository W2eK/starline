import { useDispatch } from 'react-redux';
import MapboxrGL from '../../mapboxr-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import PoiLayers from './poi-layer';
import PoiLabels from './poi-labels';
import Movements from './map-movements';
// import PoiState from './poi-state';
import { useThrottle } from '../../hooks/use-delay';

import { setVisible, changeCamera } from '../../store/poi';

const initialView = {
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
  style: 'mapbox://styles/w2ek/ckrhmo99y0lhv17lli0fgc3pb'
};
// @ts-ignore
window.__MAPBOXR_GL_DEBUG = true;

function Map() {
  const dispatch = useDispatch();
  const onmove = useThrottle(
    ({ target }) => {
      const features = target
        .queryRenderedFeatures({ layers: ['poi-halo'] })
        .reduce((obj, { id, properties, geometry }) => {
          const { maki } = properties;
          const arr = obj[maki] || [];
          const { coordinates } = geometry;
          arr.push({ id, properties, maki, coordinates });
          obj[maki] = arr;
          return obj;
        }, {});
      dispatch(setVisible(features));
    },
    1000,
    [dispatch]
  );
  const onviewport = useThrottle(
    ({ target: map }) => {
      const coordinates = map.getCenter().toArray();
      const zoom = map.getZoom();
      const bearing = map.getBearing();
      const pitch = map.getPitch();
      dispatch(changeCamera({ coordinates, zoom, bearing, pitch }));
    },
    200,
    [dispatch]
  );
  return (
    <MapboxrGL
      style={{ height: '100vh' }}
      view={initialView}
      onviewport={[onmove, onviewport]}
    >
      <Movements />
      {/* <PoiState /> */}
      <PoiLayers />
      <PoiLabels />
    </MapboxrGL>
  );
}

export default Map;
