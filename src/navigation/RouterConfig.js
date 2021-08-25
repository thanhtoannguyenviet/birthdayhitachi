import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import { NotFound } from "./NotFound";
import { ROOT, DASHBOARD } from './CONSTANTS';


export const RouterConfig = () => {
  return (
    <div>
      <Switch>
        {/* List all public routes here */}
        <Route exact path={ROOT} component={Home} />
        <Route exact path={DASHBOARD} component={Dashboard} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};
