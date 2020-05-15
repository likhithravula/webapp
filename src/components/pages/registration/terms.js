import { inject, observer } from "mobx-react"
import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class RegistrationTerms extends React.Component {

  constructor( props ) {
    super( props )

    this.changeTermsOfServiceFlag = this.changeTermsOfServiceFlag.bind( this )
  }

  changeTermsOfServiceFlag(event) {
    const { registration } = this.props;

    registration.termsOfServiceAccepted = event.target.checked
  }

  render() {
    const { registration } = this.props;

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
                checked={ registration.termsOfServiceAccepted }
                onClick={ this.changeTermsOfServiceFlag }
              />
            </Form.Group>
          </Form>

          <div className="mt-4">
            <Link to="/registration/alternatives">
              <Button className="btn btn-block helper-btn"
                disabled={ !registration.termsOfServiceAccepted }
              >
                Next - Sign in
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default inject('registration')( observer(RegistrationTerms) );
