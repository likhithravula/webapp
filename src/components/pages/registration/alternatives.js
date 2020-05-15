import { inject, observer } from "mobx-react"
import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class RegistrationAlternatives extends React.Component {
  constructor( props ) {
    super( props )

    this._selectPersona = this._selectPersona.bind( this )
  }

  _selectPersona(event) {
    const { user } = this.props.registration;
    const { value } = event.target;

    user.role = value;
  }

  render() {
    const { role } = this.props.registration.user;

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
              <Form.Check type="radio" name="alternative" label="Individual"
                value="inneed"
                onClick={ this._selectPersona }
              />
              <Form.Check type="radio" name="alternative" label="Volunteer"
                value="helper"
                onClick={ this._selectPersona }
              />
            </Form.Group>
          </Form>

          <div className="mt-4">
            <Link to="/registration/signin">
              <Button className="btn btn-block helper-btn" disabled={ !role }>
                Next - Sign in
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default inject('registration')( observer(RegistrationAlternatives) );
