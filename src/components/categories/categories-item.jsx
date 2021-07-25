import { useSelector } from 'react-redux';
import { Box, Avatar, Typography, SvgIcon, Badge } from '@material-ui/core';

function Item({ name, color, icon, active, onClick }) {
  const count =
    // @ts-ignore
    useSelector(({ categories }) => categories.visible[name]?.length) || 0;
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
      <Badge
        badgeContent={count}
        color="error"
        // sx={{ '& .MuiBadge-badge': { bgcolor: color[active ? 500 : 100] } }}
      >
        <Avatar sx={{ bgcolor: color[active ? 500 : 100], marginBottom: 0.5 }}>
          <SvgIcon
            component={icon}
            sx={{ color: active || color[500] }}
            viewBox="0 0 15 15"
            fontSize="small"
          />
        </Avatar>
      </Badge>
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
