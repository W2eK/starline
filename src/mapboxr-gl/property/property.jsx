import { useRef } from 'react';
import { withMap } from '../context';
import isEqual from '../utils/deep-equal';
import { logger } from '../utils/is-dev';

const capitalize = str => {
  return str[0].toUpperCase() + str.slice(1);
};

function Property({ map, layer = '', name, value, type }) {
  const prev = useRef(null);
  logger('property', name, 'rendering');
  if (!isEqual(value, prev.current)) {
    logger('property', name, 'updating');
    map[`set${capitalize(type)}Property`](layer, name, value);
    prev.current = value
  }
  return null;
}

export default withMap(Property);