import { Provider } from 'mobx-react'
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation";
import Home from "./components/pages/home";
import Welcome from "./components/pages/welcome";

import RegistrationTerms from "./components/pages/registration/terms";
import RegistrationAlternatives from "./components/pages/registration/alternatives";
import RegistrationSignin from "./components/pages/registration/signin";
import RegistrationInformation from "./components/pages/registration/information";
import RegistrationSkills from "./components/pages/registration/skills";
import RegistrationFinish from "./components/pages/registration/finish";

import RequestHelpType from "./components/pages/request/helpType"
import RequestSpecify from "./components/pages/request/specify"
import RequestConfirmation from "./components/pages/request/confirmation"
import RequestMap from "./components/pages/request/map"

import HelperMap from "./components/pages/helper/map"

import RegistrationStore from './stores/RegistrationStore'

import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/css/App.css";
import "./assets/css/media-queries.css";

const stores = {
  registration: new RegistrationStore()
}

function App() {
  return (
    <div className="App">
      <Provider {...stores}>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/welcome" component={Welcome} />
            <Route path="/registration/terms" component={RegistrationTerms} />
            <Route path="/registration/alternatives" component={RegistrationAlternatives} />
            <Route path="/registration/signin" component={RegistrationSignin} />
            <Route path="/registration/information" component={RegistrationInformation} />
            <Route path="/registration/skills" component={RegistrationSkills} />
            <Route path="/registration/finish" component={RegistrationFinish} />
            <Route path="/request/helpType" component={RequestHelpType} />
            <Route path="/request/specify" component={RequestSpecify} />
            <Route path="/request/confirmation" component={RequestConfirmation} />
            <Route path="/request/map" component={RequestMap} />
            <Route path="/helper/map" component={HelperMap} />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
