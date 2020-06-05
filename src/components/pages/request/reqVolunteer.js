import React from "react";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";



class RequestVolunteer extends React.Component {

  render() {

    return (

      <div className="wrapper">

        <section id="registration_finish">

          <div className="text-box">

            <h3>

              Your Requested Tasks

            </h3>

	    <p>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut

              porttitor facilisis

            </p>

          </div>



          <div className="text-box">

            <h3>Choose the task you want to ask volunteer about</h3>

          </div>



          <Form>

            <Form.Group>

              <Form.Check type="radio" name="groceries"

                label="Groceries"

              />

              <Form.Check type="radio" name="pickup_puzzle"

                label="Pick Up Puzzle"

              />

              <Form.Check type="radio" name="medicine"

                label="Buy Medicine"

              />

              <Form.Check type="radio" name="transport"

                label="Transport Something"

              />

            </Form.Group>

          </Form>



          <div className="text-box">

            <h3>Ask this Volunteer for help ?</h3>

          </div>



          <div>

            <Link to="/request/receiverReq">

              <Button className="btn btn-block helper-btn">

                Yes

              </Button>

            </Link>

          </div>

        </section>

      </div>

    );

  }

}



export default RequestVolunteer;


