import { Box } from '@material-ui/core';
import Map from '../map';
import Sidebar from '../sidebar';

function Layout() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        '& > *:last-child': {
          position: 'absolute',
          top: 0,
          pointerEvents: 'none'
        }
      }}
    >
      <Map />
      <Sidebar />
    </Box>
  );
}

export default Layout;
