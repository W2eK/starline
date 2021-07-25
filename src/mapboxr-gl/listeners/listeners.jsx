import { useEffect, Fragment } from 'react';
import { withMap } from '../context';

function Listener({ handler, event, map, layer }) {
  useEffect(() => {
    if (!map) return;
    const props = [event, layer || handler, layer ? handler : undefined];
    map.on(...props);
    return () => {
      map.off(...props);
    };
  }, [map, handler]);
  return null;
}

function Listeners({ listeners, map, layer = undefined }) {
  const eventKeys = [
    ...new Set(listeners.map(listener => Object.keys(listener)))
  ].reduce((result, key) => {
    result[key] = [];
    return result;
  }, {});
  const eventListeners = listeners.reduce((result, listener) => {
    const [key, value] = Object.entries(listener)[0];
    result[key].push(...(Array.isArray(value) ? value : [value]));
    return result;
  }, eventKeys);
  const children = Object.entries(eventListeners).map(([key, handlers]) => (
    <Fragment key={key}>
      {handlers.map((handler, i) => (
        <Listener
          key={key + i}
          handler={handler}
          map={map}
          event={key.slice(2)}
          layer={layer}
        />
      ))}
    </Fragment>
  ));
  return <>{children}</>;
}

export default withMap(Listeners);
