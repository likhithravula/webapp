import { Provider } from 'mobx-react'
import React, {Component} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation";
import Home from "./components/pages/home";
import Signin from "./components/pages/signin";
import Welcome from "./components/pages/welcome";

import RegistrationTerms from "./components/pages/registration/terms";
import RegistrationAlternatives from "./components/pages/registration/alternatives";
import RegistrationSignin from "./components/pages/registration/signin";
import RegistrationInformation from "./components/pages/registration/information";
import RegistrationSkills from "./components/pages/registration/skills";
import RegistrationFinish from "./components/pages/registration/finish";

import Thankyou from "./components/pages/request/thankYou"
import RequestVolunteer from "./components/pages/request/reqVolunteer"
import ReceiverRequest from "./components/pages/request/receiverReq"
import RequestType from "./components/pages/request/requestType.js"
import RequestType1 from "./components/pages/request/requestType1.js"
import RequestHelpType from "./components/pages/request/helpType"
import RequestSpecify from "./components/pages/request/specify"
import RequestConfirmation from "./components/pages/request/confirmation"
import VolunteerMessage from "./components/pages/request/volunteerMessage"
import RequestMap from "./components/pages/request/map"

import HelperMap from "./components/pages/helper/map"

import Rate from "./components/pages/ratings/rate"
import RatingsPending from "./components/pages/ratings/pending"

import persistentStore from './stores/PersistentStore'

import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/css/App.css";
import "./assets/css/media-queries.css";
import logo from "./assets/img/logo.png";
import { UserSession } from 'blockstack';
import { appConfig } from './constants';
import { Connect } from '@blockstack/connect';

const userSession = new UserSession({ appConfig });


export default class App extends Component {
  state = {
    userData: null,
  };

  handleSignOut(e) {
    e.preventDefault();
    this.setState({ userData: null });
    userSession.signUserOut(window.location.origin);
  }

  render() {
    const { userData } = this.state;
    const authOptions = {
      appDetails: {
        name: "Digital Volunteers",
        icon: window.location.origin + '/logo.png',
      },
      userSession,
      finished: ({ userSession }) => {
        this.setState({ userData: userSession.loadUserData() });
      },
    };
    return (
      <Connect className="App" authOptions={authOptions}>
      <Provider {...persistentStore}>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/welcome" component={Welcome} />
            <Route path="/signin" component={Signin} />
            <Route path="/registration/terms" component={RegistrationTerms} />
            <Route path="/registration/alternatives" component={RegistrationAlternatives} />
            <Route path="/registration/signin" component={RegistrationSignin} />
            <Route path="/registration/information" component={RegistrationInformation} />
            <Route path="/registration/skills" component={RegistrationSkills} />
            <Route path="/registration/finish" component={RegistrationFinish} />
            <Route path="/request/helpType" component={RequestHelpType} />
            <Route path="/request/thankYou" component={Thankyou} />
            <Route path="/request/reqVolunteer" component={RequestVolunteer} />
            <Route path="/request/receiverReq" component={ReceiverRequest} />
            <Route path="/request/requestType" component={RequestType} />
            <Route path="/request/requestType1" component={RequestType1} />
            <Route path="/request/specify" component={RequestSpecify} />
            <Route path="/request/confirmation" component={RequestConfirmation} />
            <Route path="/request/volunteerMessage" component={VolunteerMessage} />
            <Route path="/request/map" component={RequestMap} />
            <Route path="/helper/map" component={HelperMap} />
            <Route path="/ratings/pending" component={RatingsPending} />
            <Route path="/ratings/rate" component={Rate} />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </Connect>
 
    );
  }

  componentDidMount() {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(userData => {
        window.history.replaceState({}, document.title, '/');
        this.setState({ userData: userData });
      });
    } else if (userSession.isUserSignedIn()) {
      this.setState({ userData: userSession.loadUserData() });
    }
  }
}
