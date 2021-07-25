function deepEqual(a, b) {
  if (a === b) return true;
  if (!a || !b) return false;
  if (typeof a !== typeof b) return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  if (Array.isArray(a)) {
    if (a.length !== b.length) return false;
    if (a.every((x, i) => deepEqual(x, b[i]))) return true;
    return false;
  } else if (typeof a === 'object') {
    const keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;
    if (keys.every(key => deepEqual(a[key], b[key]))) return true;
    return false;
  } else {
    return false;
  }
}

export default deepEqual;
