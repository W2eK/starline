function poiFilter(visible, query) {
  // @ts-ignore
  return Object.entries(visible).reduce((obj, [key, value]) => {
    const filtred = value.filter(
      ({ properties }) =>
        properties.name?.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
    obj[key] = filtred;
    return obj;
  }, {});
}

export default poiFilter;
