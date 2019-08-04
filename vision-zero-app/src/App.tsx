import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from './pages/Home'
import Concepts from './pages/Concepts'
import NavBar from "./components/NavBar";

export const Routes = () => {
  return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/home" component={Home} exact/>
          <Route path="/concepts" component={Concepts} exact/>
        </Switch>
      </div>
  )
};

const App: React.FC = () => {
  return (
    <div className="App">
    <NavBar/>
        <Routes/>

    </div>
  );
};

export default App;
