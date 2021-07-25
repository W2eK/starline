import { Stack, styled, Paper } from '@material-ui/core';
import Categories from '../categories';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

function Sidebar() {
  return (
    <Stack
      spacing={2}
      sx={{ width: { xs: 1, md: 2 / 5, lg: 360 }, padding: 2 }}
    >
      <Categories />
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  );
}

export default Sidebar;
