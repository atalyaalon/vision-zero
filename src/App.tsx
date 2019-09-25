import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home'
import Concepts from './pages/Concepts'
import NavBar from './components/NavBar';
import {ThemeProvider} from '@material-ui/styles';
import theme from './styles/Theme';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/concepts" component={Concepts} exact/>
      </Switch>
    </div>
  )
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar/>
        <Routes/>
      </div>
    </ThemeProvider>
  );
};

export default App;
