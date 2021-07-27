import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Layout from './components/layout';
import RoutesStore from './routes';

import theme from './theme';
import store, { history } from './store';

function App() {
  return (
    <StoreProvider store={store}>
      <ConnectedRouter history={history}>
        <Router>
          <RoutesStore />
          <ThemeProvider theme={theme}>
            <Layout />
          </ThemeProvider>
        </Router>
      </ConnectedRouter>
    </StoreProvider>
  );
}

export default App;
