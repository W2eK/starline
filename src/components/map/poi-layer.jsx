import { Layer } from '../../mapboxr-gl';
import PoiFilter from './poi-filter';

function PoiLayer() {
  return (
    <Layer id="poi-halo" cursor="pointer">
      <PoiFilter />
    </Layer>
  );
}

export default PoiLayer;
