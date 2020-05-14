import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class RegistrationSkills extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="registration_skills">
          <div className="text-box">
            <h3>Tell us how you can help</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              porttitor facilisis massa vel maximus.
            </p>
          </div>

          <Form>
            <Form.Group>
              <Form.Check>
                <Form.Check.Label>Do you have a car and can drive ?</Form.Check.Label>
                <Form.Check.Input type="checkbox" name="driver"/>
              </Form.Check>
              <Form.Check>
                <Form.Check.Label>Can you pick up stuff and leave it ?</Form.Check.Label>
                <Form.Check.Input type="checkbox" name="picker"/>
              </Form.Check>
              <Form.Check>
                <Form.Check.Label>Can you do shopping ?</Form.Check.Label>
                <Form.Check.Input type="checkbox" name="shopper"/>
              </Form.Check>
              <Form.Check>
                <Form.Check.Label>Will you travel by bicycle or walk ?</Form.Check.Label>
                <Form.Check.Input type="checkbox" name="walker"/>
              </Form.Check>
              <Form.Check>
                <Form.Check.Label>Can you help with home work ?</Form.Check.Label>
                <Form.Check.Input type="checkbox" name="artist"/>
              </Form.Check>
              <Form.Check>
                <Form.Check.Label>Are you immune ?</Form.Check.Label>
                <Form.Check.Input type="checkbox" name="immune"/>
              </Form.Check>

              <Form.Group>
                <Form.Check type="checkbox" name="termsOfService"
                  label="By creating a volunteer account you agree to our Terms Of Service"
                />
              </Form.Group>
            </Form.Group>
          </Form>

          <div className="mt-4">
            <Link to="/registration/finish">
              <Button className="btn btn-block helper-btn">
                Next - Finish registration
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default RegistrationSkills;
