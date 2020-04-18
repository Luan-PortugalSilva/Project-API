import React from "react";
import { isAuthenticated } from "./auth";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Login from "../Components/Login/login.jsx";
import Register from "../Components/Register/register.jsx";
import Forgot from "../Components/Forgot/forgot.jsx";
import UsersList from "../Components/UsersList/UsersList.jsx";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/", state: { from: props.location } }}
        />
      )
    }
  />
);

export default (Routes) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/register" exact={true} component={Register} />
        <Route path="/forgot" exact={true} component={Forgot} />
        <PrivateRoute path="/users" exact component={UsersList} />
      </Switch>
    </Router>
  );
};
