import { useRouteMatch } from 'react-router-dom';

import { Filter } from '../../mapboxr-gl';
import { names } from '../../categories';

function PoiFilter({ layer = '' }) {
  const match = useRouteMatch('/:category');
  const rules = [
    'all',
    // @ts-ignore
    ['match', ['get', 'maki'], match?.params.category || names, true, false]
  ];
  return <Filter layer={layer} rules={rules} />;
}

export default PoiFilter;
