import { Grid, Box, Paper, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';

function List() {
  // @ts-ignore
  const { category } = useParams();
  // console.log(category);
  return <Paper sx={{ padding: 2 }}>List of {category}</Paper>;
}

export default List;
