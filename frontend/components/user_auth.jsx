import React from "react";
import SignupContainer from "./signup/signup_container";
import LoginContainer from "./login/login_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

export default () => (
  <div>
    <Switch>
      <AuthRoute exact path="/signup" component={SignupContainer} />
      <AuthRoute exact path="/login" component={LoginContainer} />
    </Switch>
  </div>
);
