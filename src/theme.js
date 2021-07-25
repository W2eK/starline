import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 762,
      lg: 992,
      xl: 1200
    }
  }
});

export default theme;
