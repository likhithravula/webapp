import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class RegistrationInformation extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="registration_alternatives">
          <div className="text-box">
            <h3>Fill in your information</h3>
          </div>

          <Form>
            <Form.Group>
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" name="firstName"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" name="lastName"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="text" name="phone"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" name="addressStreet"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>ZIP Code</Form.Label>
              <Form.Control type="text" name="addressPostalCode"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control type="text" name="addressCity"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password"/>
            </Form.Group>
            <Form.Group>
              <Form.Check type="checkbox" name="termsOfService"
                label="By creating a ______ account you agree to our Terms Of Service"
              />
            </Form.Group>
          </Form>

          <div>
            <Link to="/registration/skills">
              <Button className="btn btn-block helper-btn">
                Next - Fill out your skills
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default RegistrationInformation;
