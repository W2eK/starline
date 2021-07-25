import { useRouteMatch } from 'react-router-dom';

import { Filter } from '../../mapboxr-gl';
import { names } from '../../categories';

function PoiFilter() {
  const match = useRouteMatch('/:category');
  const rules = [
    'all',
    // @ts-ignore
    ['match', ['get', 'maki'], match?.params.category || names, true, false]
  ];
  const filters = ['poi-dots', 'poi-halo', 'poi-heatmap'].map(layer => (
    <Filter key={layer} layer={layer} rules={rules} />
  ));
  return <>{filters}</>;
}

export default PoiFilter;
