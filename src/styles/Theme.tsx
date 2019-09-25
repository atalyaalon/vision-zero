import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import {palette} from './globals';

const theme = createMuiTheme({
  overrides: {
    // MuiAppBar: {
    //   colorPrimary: {
    //     backgroundColor: 'transparent'
    //   }
    // },
  },
  palette: palette,
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ].join(','),
  },
});


export default theme;
