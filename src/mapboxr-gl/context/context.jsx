import React, { createContext, useContext } from 'react';
import 'mapbox-gl';

const MapContext = createContext({});

function useMap() {
  return useContext(MapContext);
}

const MapProvider = ({ children, map }) => {
  return <MapContext.Provider value={map}>{children}</MapContext.Provider>;
};

export default useMap;
export { MapProvider as Provider };
