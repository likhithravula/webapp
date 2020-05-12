import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class RequestSpecify extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="registration_finish">
          <div className="text-box">
            <h3>
              Describe what you need help with.
              If you need multiple items, write a list.
            </h3>
          </div>

          <Form>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="5"/>
            </Form.Group>
          </Form>

          <div className="text-box">
            <h3>Choose your time slots</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>

          <div>slots...</div>

          <div className="text-box">
            <h3>Choose delivery</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>

          <Form>
            <Form.Group>
              <Form.Check type="radio" name="delivery"
                label="Delivery outside the door"
              />
              <Form.Check type="radio" name="delivery"
                label="Delivery on the porch"
              />
              <Form.Check type="radio" name="delivery"
                label="Delivery with a drone"
              />
            </Form.Group>
          </Form>

          <div className="text-box">
            <h3>Choose payment method</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>

          <Form>
            <Form.Group>
              <Form.Check type="radio" name="payment"
                label="Cash"
              />
              <Form.Check type="radio" name="payment"
                label="Swish"
              />
              <Form.Check type="radio" name="payment"
                label="No payment needed"
              />
            </Form.Group>
          </Form>

          <div>
            <Link to="/request/confirmation">
              <Button className="btn btn-block helper-btn">
                Confirm request
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default RequestSpecify;
