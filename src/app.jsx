import Layout from './components/layout';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';
import store from './store';

function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
