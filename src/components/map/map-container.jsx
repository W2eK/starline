import MapboxrGL from '../../mapboxr-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import PoiFilter from './poi-filter';

const initialView = {
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
  style: 'mapbox://styles/w2ek/ckrhmo99y0lhv17lli0fgc3pb/draft'
};
// @ts-ignore
window.__MAPBOXR_GL_DEBUG = true;
function Map() {
  return (
    <MapboxrGL
      style={{ height: '100vh' }}
      view={initialView}
      // onmove={(event) => console.log(event)}
    >
      <PoiFilter />
    </MapboxrGL>
  );
}

export default Map;
