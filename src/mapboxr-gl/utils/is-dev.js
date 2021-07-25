const development =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

function isDev() {
  // @ts-ignore
  return !!window.__MAPBOXR_GL_DEBUG && development;
}

const COLORS = {
  adding: '#49c72a',
  updating: '#df9e13',
  removing: '#df2113',
  rendering: '#d4d4d4'
};

const logger = (component, name, status) => {
  if (!isDev()) return;
  const color = status === 'rendering' ? `color: ${COLORS[status]};` : '';
  const styles = [
    `font-style: italic;` + color,
    'font-weight: bold;' + color,
    `color: ${COLORS[status]}`
  ];
  console.log(
    `%c${component.toUpperCase()}:\t%c${name}\t%c${status}`,
    ...styles
  );
};

export default isDev;
export { logger };
