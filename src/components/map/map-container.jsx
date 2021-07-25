import MapboxrGL from '../../mapboxr-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const initialView = {
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
  style: 'mapbox://styles/w2ek/ckrhmo99y0lhv17lli0fgc3pb/draft'
};

function Map() {
  return <MapboxrGL style={{ height: '100vh' }} view={initialView} />;
}

export default Map;
