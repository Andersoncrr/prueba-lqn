import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Redirect, Route } from "react-router";
// import { PokeScreen } from "../components/poke/PokeScreen";
import { StarWars } from "../components/StarWars";
import { StartWarsScreen } from "../components/starWars/StartWarsScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/starwards" component={StarWars} />
            <Route
              exact
              path="/starwards/:starwarsID"
              component={StartWarsScreen}
            />
            <Redirect to="/starwards" />
          </Switch>
        </div>
      </Router>
    </>
  );
};
