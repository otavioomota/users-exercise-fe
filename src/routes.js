import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import NewUser from "./pages/NewUser";

export default function routes() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} exact />
      <Route path="/details" component={Details} />
      <Route path="/newuser" component={NewUser} />
    </Switch>
  );
}
