// @ts-nocheck
import { Grid, Box, Paper, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import Item from './categories-item';
import categories from '../../categories';
import { setCategory, resetCategory } from '../../store/categories';

function Categories() {
  const currentCategory = useSelector(({ categories }) => categories.current);
  const dispatch = useDispatch();

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
        Search arround this place
      </Typography>
      <Grid container spacing={2}>
        {Object.values(categories).map(({ name, ...category }) => (
          <Grid key={name} item xs={4} sm={3}>
            <Item
              {...category}
              name={name}
              active={name === currentCategory}
              onClick={() =>
                dispatch(
                  name === currentCategory ? resetCategory() : setCategory(name)
                )
              }
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default Categories;
