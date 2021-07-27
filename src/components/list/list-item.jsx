import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  ListItemButton,
  ListItemIcon,
  SvgIcon,
  ListItemText
} from '@material-ui/core';

import { setActivePoi, resetActivePoi } from '../../store/poi';

function Item({ id, style, icon, properties, color, category }) {
  const dispatch = useDispatch();
  return (
    <Link
      to={`/${category}/${id}`}
      onMouseEnter={() => dispatch(setActivePoi(id, category, properties.name))}
      onMouseLeave={() => dispatch(resetActivePoi())}
    >
      <ListItemButton divider disableGutters style={style}>
        <ListItemIcon sx={{ minWidth: 40 }}>
          <SvgIcon
            component={icon}
            sx={{ color: color[500] }}
            viewBox="0 0 15 15"
            fontSize="small"
          />
        </ListItemIcon>
        <ListItemText primary={properties.name} secondary={`${id}`} />
      </ListItemButton>
    </Link>
  );
}

export default Item;
