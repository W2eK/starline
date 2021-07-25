import { useRef, useEffect } from 'react';
import { withMap } from '../context';
import assert from '../utils/assert';
import isEqual from '../utils/deep-equal';
import cleanUp from '../utils/clean-up';
import { logger } from '../utils/is-dev';

function Filter({ layer, rules, map }) {
  // console.log(layer, filter, map);
  assert(layer !== undefined, 'Layer name is required for filter');
  assert(rules !== undefined, 'Rules propery is required for filter');
  const prev = useRef(rules);
  logger('filter', layer, 'rendering');
  const filter = map.getFilter(layer);
  if (filter) {
    /* On Update */
    if (!isEqual(rules, prev.current)) {
      logger('filter', layer, 'updating');
      map.setFilter(layer, rules);
    }
  } else {
    /* On Mount */
    logger('filter', layer, 'adding');
    map.setFilter(layer, rules);
  }
  /* On Unmount */
  useEffect(() => cleanUp(() => map.setFilter(layer), 'filter', layer), []);
  prev.current = rules;
  return null;
}

export default withMap(Filter);
