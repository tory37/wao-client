import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WelcomePage from './components/pages/welcome';
import LoginPage from './components/pages/login';
import SignupPage from './components/pages/signup';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';

const Routes = () => (
  <Router>
    <Route exact path="/" component={WelcomePage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/signup" component={SignupPage} />
    <Switch>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>
);

export default Routes;
