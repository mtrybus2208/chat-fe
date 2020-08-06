import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from '../../pages/Login//Login';
import Authentication from '../../components/Authentication/Authentication';
import PasswordReset from '../../pages/PasswordReset/PasswordReset';
import Snackbar from '../Snackbar/Snackbar';

const Main = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/password-reset/:token" component={PasswordReset} />
        <Route path="*" component={Authentication} />
      </Switch>
      <Snackbar />
    </Router>
  );
};

export default Main;
