import { Features } from '../../mapboxr-gl';
import { useSelector } from 'react-redux';

function PoiState() {
  // @ts-ignore
  const id = useSelector(({ poi }) => poi.id) || 0;
  const data = [{ id, active: true }];
  return <Features source="composite" sourceLayer="poi_label" data={data} />;
}

export default PoiState;
