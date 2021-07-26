import { Features } from '../../mapboxr-gl';

function PoiState() {
  const data = [{ id: 15844616720, hover: true }];
  return <Features source="composite" sourceLayer="poi_labels" data={data} />;
}

export default PoiState;
