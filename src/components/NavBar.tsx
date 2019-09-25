import React from 'react';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import {ThemeProvider} from '@material-ui/styles';
import {grey} from '@material-ui/core/colors';


const color = createMuiTheme({
  palette: {
    primary: {main: grey[600]},
    secondary: {main: '#757575'},
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    dir: 'rtl',
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    '& button': {
      color: 'white'
    }
  }
}));

const NavBar: React.FC = () => {
  const classes = useStyles();
  
  return (
    
    <div className={classes.root}>
      <ThemeProvider theme={color}>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              Vision zero
            </Typography>
            <Link to="/concepts" className={classes.link}>
              <Button color="default">מושגים</Button>
            </Link>
            <Link to="/" className={classes.link}>
              <Button color="default">דף הבית</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  )
};

export default NavBar
