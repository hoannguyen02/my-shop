import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import HomePage from "./modules/homepage/pages/HomePage";
import { NavigationComponent } from "./modules/shared";

function App() {
  return (
    <Router>
      <NavigationComponent />
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
