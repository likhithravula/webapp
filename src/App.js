import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useLocation,
  withRouter
} from "react-router-dom";

import Navigation from "./components/navigation.js";
import Home from "./components/pages/home.js";
import EnterHelper from "./components/pages/enter-helper.js";
import EnterReceiver from "./components/pages/enter-receiver.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";
import "./assets/css/media-queries.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/enter/helper" component={EnterHelper} />
          <Route path="/enter/receiver" component={EnterReceiver} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
