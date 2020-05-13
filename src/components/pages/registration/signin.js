import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class RegistrationBankID extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="registration_signin">
          <div className="text-box">
            <h3>Create an account with BankID</h3>
            <p>
              We use bankID to ensure people that the service is safe and
              reliable.
            </p>
          </div>

          <Form>
            <Form.Group>
              <Form.Label>Login with Mobile BankID</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
          </Form>

          <div>
            <Link to="/registration/information">
              <Button className="btn btn-block helper-btn">
                Next - Information about you
              </Button>
            </Link>
          </div>

          <div>
            <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            porttitor facilisis massa vel maximus.&nbsp;
            <Link to="">GDPR INFO</Link>
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default RegistrationBankID;
