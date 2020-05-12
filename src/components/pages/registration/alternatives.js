import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class RegistrationAlternatives extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="registration_alternatives">
          <div className="text-box">
            <h3>Choose the alternative that suits you the best</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              porttitor facilisis massa vel maximus. Nulla facilisi. Aenean vitae
              massa vulputate, auctor metus seLorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut porttitor facilisis massa vel
              maximus. Nulla facilisi.
            </p>
          </div>

          <Form>
            <Form.Group>
              <Form.Check type="radio" name="alternative" label="Individual"/>
              <Form.Check type="radio" name="alternative" label="Company"/>
              <Form.Check type="radio" name="alternative" label="Government"/>
            </Form.Group>
          </Form>

          <div>
            <Link to="/registration/bankid">
              <Button className="btn btn-block helper-btn">
                Next - Sign in with BankID
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default RegistrationAlternatives;
