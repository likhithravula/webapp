import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import handsColorReceiver from "../../assets/img/hands_orange.svg";

import Button from "react-bootstrap/Button";

class EnterHelper extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="intro">
          <div>
            <img src={handsColorReceiver} className="hands" alt="hands" />
          </div>
          <div>
            <img src={logo} className="logo" alt="logo" />
          </div>
          <div className="text-box">
            <h3>Welcome to the digital voluntary app</h3>
          </div>

          <div>
            <Button className="btn helper-btn">
              Create an account using BankID
            </Button>
          </div>

          <Link to="">Already have an account? Click here to sign in</Link>
        </section>
      </div>
    );
  }
}

export default EnterHelper;
