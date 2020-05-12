import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class RequestHelpType extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="registration_finish">
          <div className="text-box">
            <h3>What do you need help with?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              porttitor facilisis
            </p>
          </div>

          <ul>
            <li>Food</li>
            <li>Transport</li>
            <li>Medicine</li>
            <li>Other</li>
          </ul>

          <div>
            <Link to="/request/specify">
              <Button className="btn btn-block helper-btn">
                Next - Specify your request
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default RequestHelpType;
