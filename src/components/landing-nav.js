import { inject, observer } from "mobx-react";
import React from "react";
import { withRouter } from 'react-router';

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import '../assets/css/Landingpage.css';
import logo from "../assets/img/logo.png";

class LandingNav extends React.Component {

    render() {

        return (
            <Navbar id="nav" sticky="top" bg="light">
                <Navbar.Brand href="./">
                    <img
                        src={logo}
                        id="logo"
                        alt="The digital volunteer"
                    />
                </Navbar.Brand>
                <Nav>
                    <a class="nav-link" href="#claim">About</a>
                    <a class="nav-link" href="#home-info">How it works</a>
                    <a class="nav-link" href="#roadmap">Roadmap</a>
                </Nav>
            </Navbar>
        );
    }
}

export default withRouter(
    inject('navigation', 'user')( observer(LandingNav) )
);
