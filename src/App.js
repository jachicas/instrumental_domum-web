import React from "react";
import Home from "./views/Home";
import Login from "./views/Login";
import NotFound from "./views/NotFound";

import "./App.css";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App;