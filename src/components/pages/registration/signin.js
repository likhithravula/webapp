import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Progress from "./progress";

class RegistrationBankID extends React.Component {
  render() {
    const current = 3;
    return (
      <div className="wrapper">
        <Progress current={current}/>
        <section id="registration_signin">
          <div className="text-box">
            <h3>Welcome</h3>
          </div>

          <Form>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="text"  size="lg" name="email" placeholder="Enter your Email"/>
            </Form.Group>
          </Form>
		  
		  <Form>
		  <Form.Group>
              <Form.Label>Create Password</Form.Label>
              <Form.Control type="text" size="lg" name="password" placeholder="**********"/>
            </Form.Group>
          </Form>
		  
		  <Form>
		  <Form.Group>
              <Form.Label>What is you Favorite Color</Form.Label>
              <Form.Control type="text" size="lg" name="passwordhint" placeholder="This will be your Password Hint"/>
            </Form.Group>
          </Form>



          <div className="mt-4">
            <Link to="/registration/information">
              <Button className="btn btn-block helper-btn">
                SignUp
              </Button>
            </Link>
          </div>

        </section>
      </div>
    );
  }
}

export default RegistrationBankID;
