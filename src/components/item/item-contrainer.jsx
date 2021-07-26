// @ts-nocheck
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Box, Paper, Typography, Divider, Link } from '@material-ui/core';
import Content from './item-content';
import categories from '../../categories';

function Item() {
  let { category, id } = useParams();
  id = parseInt(id);
  // const list = useSelector(({ categories }) => categories.visible[category]);
  const { plural } = categories[category];
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="subtitle1">
        <RouterLink to={`/${category}`} style={{ textDecoration: 'none' }}>
          <Link underline="hover" as="span">
            ‹ Return to Local {plural}
          </Link>
        </RouterLink>
      </Typography>

      <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
      <Box sx={{ maxHeight: '50vh', overflowY: 'scroll', marginRight: -2  }}>
        <Content id={id} category={category} />
      </Box>
    </Paper>
  );
}

export default Item;
