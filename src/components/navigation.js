import React from "react";
//import Link from "react-router-dom/Link";

import menuIcon from "../assets/img/menu_icon.svg";
import logo from "../assets/img/logo.png";

class Navigation extends React.Component {
  render() {
    return (
      <header>
        <img src={menuIcon} className="menuIcon" alt="menu" />
        {this.props.showNavLogo ? (
          <img src={logo} className="navLogo" alt="" />
        ) : (
          ""
        )}
      </header>
    );
  }
}

export default Navigation;
