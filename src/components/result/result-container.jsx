// @ts-nocheck
import { Paper, Typography, Divider } from '@material-ui/core';
import { useSelector } from 'react-redux';

import ResultList from './result-list';

function Result() {
  const search = useSelector(({ poi }) => poi.search);
  const found = useSelector(({ poi }) => poi.found);
  const empty = !Object.values(found).some(({ length }) => length);
  return search.length ? (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
        Search results
      </Typography>
      <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
      {empty ? (
        <Typography align="center" variant="body2" color="error">
          Not Found
        </Typography>
      ) : (
        <ResultList found={found} />
      )}
    </Paper>
  ) : null;
}

export default Result;
