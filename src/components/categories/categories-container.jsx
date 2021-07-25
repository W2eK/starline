import { Grid, Box, Paper, Typography } from '@material-ui/core';
import Item from './categories-item';
import categories from '../../categories';

function Categories() {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="subtitle1" sx={{marginBottom: 2}}>
        Search arround this place
      </Typography>
      <Grid container spacing={2}>
        {Object.values(categories).map(category => (
          <Grid key={category.name} item xs={4} sm={3}>
            <Item {...category} active={category.name === 'grocery'} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default Categories;
