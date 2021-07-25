import React from 'react';
import useMap from './context';

const withMap = WrappedComponent => {
  const ComponentWithMap = props => {
    const map = useMap();
    return <WrappedComponent {...props} map={map} />;
  };
  return ComponentWithMap;
};

export default withMap;
