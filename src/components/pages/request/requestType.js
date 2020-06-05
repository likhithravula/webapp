import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Shopping from "../../../assets/img/shopping.png";
import Phone from "../../../assets/img/phone.png";
import Chat from "../../../assets/img/chat.png";


class RequestType extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="Request_type">
          <div className="text-box">
	     <img alt="" src={Shopping} className={Shopping} />
            <h3>
              Groceries Shopping
            </h3>
          </div>

          <Form>
            <Form.Group>
               <p> Receiver name ....</p>
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="5"/>
            </Form.Group>
          </Form>
	  <div className="text-box">
           <p>Receiver Map Address ..</p>
          </div>


          <div className="text-box">
            <h3>Time slots</h3>
          </div>
	  <div>
	  <p>slots...</p>
	  </div>
		  
	<div id="communication">
          <div className="wrapper">
            <div className="communication-list">
              <div className="communication_info">
                <img alt="" src={Phone} className={Phone} />
	    	 <div>
	    	    <p>Call Agda</p>
	    	</div>
              </div>
              <div className="communication_info">
                <img alt="" src={Chat} className={Chat} />
	    	<div>
	    	 <p>Live chat with Agda</p>
	        </div>
              </div>
	    </div>
          </div>
        </div>
      <div className="wrapper">
	<div className="text-box">
            <h3>Are you sure ?</h3>
        </div>
      </div>
	<div id="req">
          <div className="req-actions">
	      <Link to="/request/requestType1">
                <Button className="req-btn">Yes</Button>
              </Link>
              <Link to="/">
                <Button className="decline-btn">No</Button>
              </Link>
            </div>
	 </div>
        </section>
      </div>
    );
  }
}

export default RequestType;
