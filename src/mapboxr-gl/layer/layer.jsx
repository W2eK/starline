import { useRef, useEffect, Children, cloneElement } from 'react';
import { withMap } from '../context';
import Listeners, { withListeners } from '../listeners';
import assert from '../utils/assert';
import isEqual from '../utils/deep-equal';
import deepMerge from '../utils/deep-merge';
import cleanUp from '../utils/clean-up';
import { logger } from '../utils/is-dev';

const normalize = props => {
  if (props.sourceLayer) {
  }
};

function Layer({ children, id, map, beforeId, cursor, listeners, ...rest }) {
  if (cursor) {
    // prettier-ignore
    listeners.push({ onmouseenter: () => (map.getCanvas().style.cursor = cursor) });
    listeners.push({ onmouseleave: () => (map.getCanvas().style.cursor = '') });
  }
  logger('layer', id, 'rendering');
  const prev = useRef(rest);
  const styles = map.getStyle().layers;
  const index = styles.findIndex(({ id: layerId }) => layerId === id);
  const style = styles[index];
  const master = useRef(style);

  /* On Mount */
  useEffect(() => {
    if (master.current) {
      /* Has Master */
      if (!Object.keys(rest).length) return;
      logger('layer', id, 'updating');
      const merged = deepMerge(style, rest);
      const masterBeforeId = beforeId || styles[index + 1]?.id;
      map.removeLayer(id);
      map.addLayer({ id, ...merged }, masterBeforeId);
      /* On Remove — Restore original layer */
      return cleanUp(
        () => {
          map.removeLayer(id);
          map.addLayer({ id, ...master.current }, masterBeforeId);
        },
        'layer',
        id
      );
    } else {
      /* Add new layer */
      logger('layer', id, 'adding');
      map.addLayer({ id, ...rest }, beforeId);
      /* On Remove */
      return cleanUp(() => map.removeLayer(id), 'layer', id);
    }
  }, []);

  /* On Update */
  // if (!isEqual(rest, prev.current)) {
  //   logger('layer', id, 'updating');
  //   const masterBeforeId = beforeId || styles[index + 1]?.id;
  //   map.removeLayer(id);
  //   map.addLayer({ id, ...rest }, masterBeforeId);
  // }
  return (
    <>
      <Listeners listeners={listeners} layer={id} />
      {Children.map(children, child => cloneElement(child, { layer: id }))}
    </>
  );
}

export default withMap(withListeners(Layer));
