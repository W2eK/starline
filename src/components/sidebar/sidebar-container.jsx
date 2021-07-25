import { Stack, styled, Paper } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categories from '../categories';
import List from '../list';

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
      <Router>
        <Categories />
        <Switch>
          <Route path="/:category">
            <List />
          </Route>
        </Switch>
      </Router>
    </Stack>
  );
}

export default Sidebar;
