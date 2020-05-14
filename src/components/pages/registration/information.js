import { inject, observer } from "mobx-react"
import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class RegistrationInformation extends React.Component {

    constructor( props ) {
      super( props )

      this._onChange = this._onChange.bind( this )
    }

    _onChange(event) {
      console.log( JSON.stringify( event.target.name ) )
    }

  render() {
    return (
      <div className="wrapper">
        <section id="registration_information">
          <div className="text-box">
            <h3>Fill in your information</h3>
          </div>

          <Form>
            <Form.Group>
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" size="lg" name="firstName"
                onChange={ this._onChange }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" size="lg" name="lastName"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="text" size="lg" name="phone"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" size="lg" name="email"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" size="lg" name="addressStreet"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>ZIP Code</Form.Label>
              <Form.Control type="text" size="lg" name="addressPostalCode"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control type="text" size="lg" name="addressCity"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" size="lg" name="password"/>
            </Form.Group>
          </Form>

          <div className="mt-4">
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

export default inject('registration')( observer(RegistrationInformation) );
