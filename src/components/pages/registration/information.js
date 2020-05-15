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

    if( [ 'street', 'postalCode', 'city' ].includes(name) )
      user.address[name] = value;
    else
      user[name] = value;
  }

  render() {
    const {
      firstName, lastName, phone, email, address
    } = this.props.registration.user;
    const { street, postalCode, city } = address

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
              <Form.Control type="text" size="lg" name="street"
                onChange={ this._onChange }
                value={ street }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>ZIP Code</Form.Label>
              <Form.Control type="text" size="lg" name="postalCode"
                onChange={ this._onChange }
                value={ postalCode }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control type="text" size="lg" name="city"
                onChange={ this._onChange }
                value={ city }
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
