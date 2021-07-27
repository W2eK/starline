import { useSelector } from 'react-redux';
import { Layer, Property, Filter } from '../../mapboxr-gl';

const hexToRgb = hex => {
  return hex
    .slice(1)
    .match(/.{2}/g)
    .map(x => parseInt(x, 16));
};

function PoiHeatmap() {
  // @ts-ignore
  let { name: category, color } = useSelector(({ poi }) => poi.category || {});
  color = color?.[700] || '#999999';
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
    <Layer id="poi-heatmap">
      <Filter rules={['match', ['get', 'maki'], category || '', true, false]} />
      <Property name="heatmap-color" value={heatmap} type="paint" />
    </Layer>
  );
}

export default PoiHeatmap;
