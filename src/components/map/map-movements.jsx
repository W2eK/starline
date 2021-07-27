// @ts-nocheck
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMap } from '../../mapboxr-gl';

function Movements() {
  const map = useMap();
  const { coordinates, bearing, pitch, zoom } = useSelector(
    ({ poi }) => poi.movementCamera
  );
  const [lon, lat] = coordinates || [];
  useEffect(() => {
    if (lon && lat) {
      const direction = zoom >= map.getZoom();
      map[direction ? 'easeTo' : 'flyTo']({
        center: [lon, lat],
        bearing,
        pitch,
        zoom
      });
    }
  }, [map, lon, lat, bearing, pitch, zoom]);
  return null;
}

export default Movements;
