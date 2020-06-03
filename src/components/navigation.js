import { inject, observer } from "mobx-react";
import React from "react";
import { withRouter } from 'react-router';

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class Navigation extends React.Component {
  async logoutUser() {
    const { navigation, history, user } = this.props

    navigation.expanded = false

    await user.logout()

    history.push( '/' )
  }

  navigate( view ) {
    const { history, navigation } = this.props

    navigation.expanded = false

    view && history.push( view )
  }

  render() {
    const { navigation, user } = this.props

    return (
      <header>
        {
          user.isLoggedIn() &&
          (
            <Navbar id="navigation_bar" expand="xl" collapseOnSelect
              onToggle={ () => navigation.expanded = true }
              expanded={ navigation.expanded }
            >
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link onClick={ () => this.navigate( '' ) }>
                    Leaderboard
                  </Nav.Link>
                  <Nav.Link onClick={ () => this.navigate( '' ) }>
                    My profile
                  </Nav.Link>
                  <Nav.Link onClick={ () => this.navigate( '' ) }>
                    Pending status and history
                  </Nav.Link>
                  <Nav.Link onClick={ () => this.navigate( '/ratings/pending' ) }>
                    Rate
                  </Nav.Link>
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
  inject('navigation', 'user')( observer(Navigation) )
);
