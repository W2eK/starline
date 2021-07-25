function assert(condition, msg) {
  if (!condition) {
    throw new Error(msg);
  }
}

export default assert;