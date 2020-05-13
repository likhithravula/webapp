import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class RegistrationAlternatives extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="registration_terms">
          <div className="text-box">
            <h3>Terms of service</h3>
          </div>

          <Form>
            <Form.Group>
              <Form.Check type="checkbox" name="termsOfService"
                label="By creating a ______ account you agree to our Terms Of Service"
              />
            </Form.Group>
          </Form>

          <div>
            <Link to="/registration/alternatives">
              <Button className="btn btn-block helper-btn">
                Next - Choose ...
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default RegistrationAlternatives;
