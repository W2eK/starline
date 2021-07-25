import { useRouteMatch } from 'react-router-dom';

import { Layer, Property, Filter } from '../../mapboxr-gl';
import PoiFilter from './poi-filter';
import categories, { names } from '../../categories';

const defaultRule = Object.values(categories).reduce(
  (rule, { color, name }) => [...rule, name, color[700]],
  ['match', ['get', 'maki']]
);
defaultRule.push('#999999');

const hexToRgb = hex => {
  return hex
    .slice(1)
    .match(/.{2}/g)
    .map(x => parseInt(x, 16));
};

function PoiLayer() {
  const match = useRouteMatch('/:category');
  // @ts-ignore
  const category = match?.params.category;
  const color = categories[category]?.color[700] || '#999999';
  const rule = category
    ? ['match', ['get', 'maki'], category, color, '#999999']
    : defaultRule;
  const heatmap = [
    'interpolate',
    ['linear'],
    ['heatmap-density'],
    0,
    `rgba(${hexToRgb(color).join(',')},0)`,
    0.1,
    `rgba(${hexToRgb(color).join(',')},0.05)`,
    0.5,
    `rgba(${hexToRgb(color).join(',')},0.1)`,
    1,
    `rgba(${hexToRgb(color).join(',')},0.15)`
  ];
  return (
    <>
      <Layer id="poi-dots">
        <PoiFilter />
        <Property name="circle-color" value={rule} type="paint" />
      </Layer>
      <Layer id="poi-halo" cursor="pointer">
        <Filter rules={['match', ['get', 'maki'], names, true, false]} />
        <Property name="circle-color" value={rule} type="paint" />
      </Layer>
      <Layer id="poi-heatmap">
        <Filter
          rules={['match', ['get', 'maki'], category || '', true, false]}
        />
        <Property name="heatmap-color" value={heatmap} type="paint" />
      </Layer>
    </>
  );
}

export default PoiLayer;
