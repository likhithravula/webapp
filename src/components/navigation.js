import { inject, observer } from "mobx-react";
import React from "react";
import { withRouter } from 'react-router';

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.png";

class Navigation extends React.Component {

  constructor(props) {
    super (props);

    this.state = {
      expanded: false,
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  async logoutUser() {
    const { history, user } = this.props
    await user.logout()
    history.push( '/' )
    window.location.reload();
  }

  /* TODO: properly close navbar on navigation and logout */
  navigate( view ) {
    const { history } = this.props
    view && history.push( view )
  }

  toggleNavbar() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {

    const { user } = this.props

    // eslint-disable-next-line
    const { data } = user // quirk, for some reason user is not hydrated unless the data field is extracted; this does not work for token.

    return (
        <header id="nav-wrapper">
          <Navbar id="nav" bg="light" expand="xl" collapseOnSelect>
            <Navbar.Toggle onClick={this.toggleNavbar} />
            <Navbar.Brand href="./">
              <img
                  src={logo}
                  id="logo"
                  alt="The digital volunteer"
              />
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                {
                  user.isLoggedIn() &&
                  (
                      <div>
                    <span className="nav-link" onClick={ () => this.navigate( '' ) }>
                      Leaderboard
                    </span>
                        <span className="nav-link" onClick={ () => this.navigate( '' ) }>
                      My profile
                    </span>
                        <span className="nav-link" onClick={ () => this.navigate( '' ) }>
                      Pending status and history
                    </span>
                        <span className="nav-link" onClick={ () => this.navigate( '/ratings/pending' ) }>
                      Rate
                    </span>
                        <span className="nav-link" onClick={ () => this.logoutUser( '/' ) }>
                      Logout
                    </span>
                      </div>
                  )
                }
                {
                  !user.isLoggedIn() &&
                  (
                      <span className="nav-link" onClick={ () => this.navigate( '/signin')}>Login</span>
                  )
                }
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
    );
  }
}

export default withRouter(
    inject('navigation', 'user')( observer(Navigation) )
);
