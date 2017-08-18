import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Index = () =>
  <main>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
    </Switch>
  </main>;

export default Index;
