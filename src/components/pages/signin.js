import { inject, observer } from "mobx-react";
import React from "react";
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class Signin extends React.Component {

  async _loginUser() {
    const { user } = this.props

    // TODO: replace this with auth service, once it's ready
    user.data = {
      email: 'xyz@gmail.com',
      password: 'xyzxyz'
    }

    const response = await user.login()

    if( response.token ) {
      user.data = response

      this.props.history.push( '/helper/map' )
    }
  }

  render() {
    const { user } = this.props
    const { message } = user

    return (
      <div className="wrapper">
        <section id="registration_signin">
          <div className="text-box">
            <h3>Sign in</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className={ `alert alert-danger ${ message ? '' : 'd-none' }` }
            onClick={ () => user.clearMessage() }
          >
            { message }
          </div>

          <Form>
            <Form.Group>
              <Form.Label>Login ...</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
          </Form>

          <div className="mt-4">
            <Button className="btn btn-block helper-btn"
              onClick={ () => this._loginUser() }
            >
              Next
            </Button>
          </div>
        </section>
      </div>
    )
  }
}

export default withRouter(
  inject('user')( observer(Signin) )
);
