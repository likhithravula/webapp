import React from "react";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

import profile from "../../../assets/img/volunteer.png";



class ReceiverRequest extends React.Component {

  render() {

    return (

    <section id="Receiver_Request">
	
		<div id="volunteer-info">
          <div className="wrapper">
            <div className="profile-list">
              <div className="profile_info">
                <img alt="volunteer pic" src={profile} />
              </div>
              <div className="profile_info">
                <p> Rating ..</p>
              </div>
	    </div>
          </div>
        </div>
	
	  <div className="wrapper">
	  
          <div className="text-box">

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

            <Link to="/request/requestType">

              <Button className="btn btn-block helper-btn">

                Yes

              </Button>

            </Link>

          </div>

	   </div>
	   
	   
        
	</section>


    );

  }

}



export default ReceiverRequest;


