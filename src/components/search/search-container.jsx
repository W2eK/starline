import { Paper, InputBase, Divider, IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { useDispatch, useSelector } from 'react-redux';

import { searchPoi } from '../../store/poi';

function Search() {
  const dispatch = useDispatch();
  // @ts-ignore
  const search = useSelector(({ poi }) => poi.search);
  return (
    <Paper sx={{ padding: 1, display: 'flex' }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search on StarLine Maps"
        value={search}
        onChange={({ target }) => dispatch(searchPoi(target.value))}
      />
      {search && (
        <>
          <Divider sx={{ height: 32 }} orientation="vertical" />
          <IconButton
            color="primary"
            sx={{ padding: 0.5, paddingLeft: 1 }}
            onClick={() => dispatch(searchPoi(''))}
          >
            <ClearIcon fontSize="small" />
          </IconButton>
        </>
      )}
    </Paper>
  );
}

export default Search;
