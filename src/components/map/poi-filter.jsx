// @ts-nocheck
import { useSelector } from 'react-redux';

import { Filter } from '../../mapboxr-gl';
import { names } from '../../categories';

function PoiFilter({ layer = '' }) {
  const { name: category } = useSelector(({ poi }) => poi.category || {});
  const rules = [
    'all',
    ['match', ['get', 'maki'], category || names, true, false]
  ];
  return <Filter layer={layer} rules={rules} />;
}

export default PoiFilter;
