import { Box, Avatar, Typography, SvgIcon } from '@material-ui/core';

function Item({ name, color, icon, active, onClick }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        paddingBottom: 0.5
      }}
      onClick={onClick}
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
