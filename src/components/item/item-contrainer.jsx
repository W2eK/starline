// @ts-nocheck
import { Link as RouterLink } from 'react-router-dom';
import { Box, Paper, Typography, Divider, Link } from '@material-ui/core';
import Content from './item-content';
import { useSelector, useDispatch } from 'react-redux';

import { unfreezeMap } from '../../store/poi';

function Item() {
  const { plural, name: category } =
    useSelector(({ poi }) => poi.category) || {};
  const id = useSelector(({ poi }) => poi.id);
  const name = useSelector(({ poi }) => poi.name);
  const dispatch = useDispatch();
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="subtitle1">
        <RouterLink to={`/${category}`} style={{ textDecoration: 'none' }} onClick={() => dispatch(unfreezeMap(true))}>
          <Link underline="hover" as="span">
            ‹ Return to Local {plural}
          </Link>
        </RouterLink>
      </Typography>

      <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
      <Box sx={{ maxHeight: '50vh', overflowY: 'scroll', marginRight: -2 }}>
        {name && <Typography variant="h6">{name}</Typography>}
        <Content id={id} category={category} />
      </Box>
    </Paper>
  );
}

export default Item;
