// @ts-nocheck
import { Grid, Paper, Typography, Divider } from '@material-ui/core';
import {
  Link as RouterLink,
  useLocation,
  useRouteMatch
} from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

import Item from './categories-item';
import categories from '../../categories';
// import { setCategory, resetCategory } from '../../store/categories';

function Categories() {
  // const currentCategory = useSelector(({ categories }) => categories.current);
  // const dispatch = useDispatch();
  const location = useLocation();
  const match = useRouteMatch('/:category');
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
        Search arround this place
      </Typography>
      <Divider sx={{ marginBottom: 3 }} />
      <Grid container spacing={2}>
        {Object.values(categories).map(({ name, ...category }) => {
          const active = match?.params.category === name;
          return (
            <Grid key={name} item xs={4} sm={3}>
              <RouterLink
                to={active ? '/' : '/' + name}
                style={{ textDecoration: 'none' }}
              >
                <Item {...category} name={name} active={active} />
              </RouterLink>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
}

export default Categories;
