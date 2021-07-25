import { Box, Avatar, Typography, SvgIcon } from '@material-ui/core';
// import { Airport11 as Airport } from '@alpaca-travel/react-maki-icons';
import { ReactComponent as Logo } from '../../assets/icons/airfield-15.svg';
// import * as colors from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';
// import AcUnitIcon from '@material-ui/icons/AcUnit';
import categories from '../../categories';

console.log(categories);
function Item({ name, color, icon, active }) {
  // return <Avatar>{name.toUpperCase()[0]}</Avatar>;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 0.5
      }}
    >
      <Avatar sx={{ bgcolor: color[active ? 500 : 100], marginBottom: 0.5 }}>
        <SvgIcon
          component={icon}
          sx={{ color: active || color[500] }}
          viewBox="0 0 15 15"
          fontSize="small"
        />
      </Avatar>
      <Typography
        sx={{ maxWidth: '100%' }}
        color={active ? 'text.primary' : 'text.secondary'}
        variant="caption"
        noWrap
      >
        {name}
      </Typography>
    </Box>
  );
}

export default Item;
