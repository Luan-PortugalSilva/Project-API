import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from '../Components/Login/login.jsx';
import Register from '../Components/Register/register.jsx';
import Forgot from '../Components/Forgot/forgot.jsx';
import UsersList from '../Components/UsersList/UsersList.jsx';

export default Routes => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={ Login } />
        <Route path="/register" exact={true} component={ Register } />
        <Route path="/forgot" exact={true} component={ Forgot } />
        <Route path="/users" exact={true} component={ UsersList } />
      </Switch>
    </Router>
  )
};