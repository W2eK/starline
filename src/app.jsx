import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/layout';

import theme from './theme';
import store from './store';

function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout />
        </Router>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
