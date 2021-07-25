import { debounce, throttle } from 'lodash';
import { useCallback } from 'react';

function useThrottle(callback, delay, dependencies) {
  return useCallback(throttle(callback, delay), dependencies);
}

function useDebounce(callback, delay, dependencies) {
  return useCallback(debounce(callback, delay), dependencies);
}

export { useDebounce, useThrottle };
