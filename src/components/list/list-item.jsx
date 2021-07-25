import {
  ListItemButton,
  ListItemIcon,
  SvgIcon,
  ListItemText
} from '@material-ui/core';

function Item({ id, style, icon, properties, color }) {
  return (
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
  );
}

export default Item;
