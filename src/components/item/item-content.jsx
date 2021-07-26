// @ts-nocheck
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Typography,
  CircularProgress,
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
  const { item, loading, error } = useSelector(({ poi }) => poi);
  if (loading) return <LinearProgress />;
  if (!item) return null;
  const { name, ...properties } = item.properties;
  const rows = Object.entries(properties).map(([key, value]) => (
    <ListItem key={key} disablePadding>
      <ListItemText primary={value} secondary={key} />
    </ListItem>
  ));
  return (
    <>
      <Typography variant="h6">{name}</Typography>
      <List dense >{rows}</List>
    </>
  );
}

export default Content;
