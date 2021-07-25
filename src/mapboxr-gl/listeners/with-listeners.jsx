import EVENTS from './events';

function withListeners(Component) {
  return function Wrapper(props) {
    const result = Object.entries(props).reduce(
      (result, [key, value]) => {
        const includes = EVENTS.includes(key.slice(2));
        if (includes) {
          result.listeners.push({ [key]: value });
        } else {
          result[key] = value;
        }
        return result;
      },
      { listeners: [] }
    );
    return <Component {...result} />;
  };
}

export default withListeners;
