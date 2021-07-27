// @ts-nocheck
import { useSelector } from 'react-redux';

import { Layer, Property, Filter } from '../../mapboxr-gl';
import categories, { names } from '../../categories';

const defaultRule = Object.values(categories).reduce(
  (rule, { color, name }) => [...rule, name, color[700]],
  ['match', ['get', 'maki']]
);
defaultRule.push('#999999');

//prettier-ignore
const getSearchRule = query =>
  ['>', ['index-of', query.toLowerCase(), ['downcase', ['get', 'name']]], -1]

function PoiDots() {
  let { name: category, color } = useSelector(({ poi }) => poi.category || {});
  const search = useSelector(({ poi }) => poi.search);
  color = color?.[700] || '#999999';
  const rule = category
    ? [
        'case',
        ['all', getSearchRule(search), ['==', ['get', 'maki'], category]],
        color,
        '#999999'
      ]
    : defaultRule;
  return (
    <>
      <Layer id="poi-dots" onmouseenter={e => console.log(e)}>
        <Filter
          rules={[
            'all',
            ['match', ['get', 'maki'], category || names, true, false],
            getSearchRule(search)
          ]}
        />
        <Property name="circle-color" value={rule} type="paint" />
      </Layer>
      <Layer id="poi-halo" cursor="pointer">
        <Filter rules={['match', ['get', 'maki'], names, true, false]} />
        <Property name="circle-color" value={rule} type="paint" />
      </Layer>
    </>
  );
}

export default PoiDots;
