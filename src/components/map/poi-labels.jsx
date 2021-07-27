import { Layer, Property, Filter } from '../../mapboxr-gl';
import { useSelector } from 'react-redux';

function PoiLayer() {
  // @ts-ignore
  const id = useSelector(({ poi }) => poi.id) || 0;
  return (
    <Layer id="poi-labels">
      <Filter rules={['match', ['id'], id, true, false]} />
    </Layer>
  );
}

export default PoiLayer;
