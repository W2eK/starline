// @ts-nocheck
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Typography,
  LinearProgress,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

import { poiFetch } from '../../store/poi';

function Content({ id, category }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(poiFetch({ id, category }));
  }, []);
  const loading = useSelector(({ poi }) => poi.loading);
  const item = useSelector(({ poi }) => poi.item);
  if (loading) return <LinearProgress sx={{ marginBottom: 1, marginTop: 2 }} />;
  if (!item) return <Typography color="error">Something goes wrong...</Typography>;
  const rows = Object.entries(item).map(([key, value]) => (
    <ListItem key={key} disablePadding>
      <ListItemText primary={value} secondary={key} />
    </ListItem>
  ));
  return <List dense>{rows}</List>;
}

export default Content;
