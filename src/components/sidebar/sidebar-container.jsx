import { Stack, styled, Paper } from '@material-ui/core';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

function Sidebar() {
  return (
    <Stack spacing={2} sx={{ width: { xs: 1, sm: 2 / 5 }, padding: 1 }}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  );
}

export default Sidebar;
