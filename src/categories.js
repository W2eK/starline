import * as materialColors from '@material-ui/core/colors';
import * as icons from './assets/icons';

const colors = [
  materialColors.red,
  materialColors.pink,
  materialColors.purple,
  materialColors.deepPurple,
  materialColors.indigo,
  materialColors.blue,
  materialColors.lightBlue,
  materialColors.cyan,
  materialColors.teal,
  materialColors.green,
  materialColors.lightGreen,
  materialColors.lime,
  materialColors.yellow,
  materialColors.amber,
  materialColors.orange,
  materialColors.deepOrange
];

export const names = [
  'shop',
  'grocery',
  'cafe',
  'bakery',
  'lodging',
  'bank'
];

const categories = names.reduce((obj, name, i, { length }) => {
  const step = Math.round((colors.length / length) * i) % colors.length;
  const color = colors[step];
  const icon = icons[name];
  obj[name] = { color, icon, name };
  return obj;
}, {});

export default categories;
