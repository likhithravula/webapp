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
    const { user } = this.props.registration;
    const { name, value } = event.target;

    user[name] = value;
  }

  render() {
    const {
      firstName, lastName, phone, email, addressStreet,
      addressPostalCode, addressCity
    } = this.props.registration.user;

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
                value={ firstName }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" size="lg" name="lastName"
                onChange={ this._onChange }
                value={ lastName }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="text" size="lg" name="phone"
                onChange={ this._onChange }
                value={ phone }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" size="lg" name="email"
                onChange={ this._onChange }
                value={ email }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" size="lg" name="addressStreet"
                onChange={ this._onChange }
                value={ addressStreet }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>ZIP Code</Form.Label>
              <Form.Control type="text" size="lg" name="addressPostalCode"
                onChange={ this._onChange }
                value={ addressPostalCode }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control type="text" size="lg" name="addressCity"
                onChange={ this._onChange }
                value={ addressCity }
              />
            </Form.Group>
          </Form>

          <div className="mt-4">
            <Link to="/registration/skills">
              <Button className="btn btn-block helper-btn"
                disabled={ true }
              >
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
