import { inject, observer } from "mobx-react";
import React from "react";
import { withRouter } from 'react-router';

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class Navigation extends React.Component {
  async logoutUser() {
    const { history, user } = this.props

    await user.logout()

    history.push( '/' )
  }

  render() {
    return (
      <header>
        {
          this.props.user.isLoggedIn() &&
          (
            <Navbar id="navigation_bar" collapseOnSelect expand="xl">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#TBD">Leaderboard</Nav.Link>
                  <Nav.Link href="#TBD">My profile</Nav.Link>
                  <Nav.Link href="#TBD">Pending status and history</Nav.Link>
                  <Nav.Link href="#TBD">Rate persona</Nav.Link>
                  <Nav.Link onClick={ () => this.logoutUser() }>
                    Logout
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          )
        }
      </header>
    );
  }
}

export default withRouter(
  inject('user')( observer(Navigation) )
);
