import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Auth from "./Auth";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Topbar from "./Topbar";

export default function App() {
  return (
    <div className="App">
      <Topbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Auth>
            <Switch>
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </Auth>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
