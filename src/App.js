import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Redirector from './Redirector';
import Home from './Home';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from='/' to='/landing' />
        <Route path='/landing'>
          <Home />
        </Route>
        <Route path="/:id">
          <Redirector />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
