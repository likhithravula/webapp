import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class Thankyou extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="registration_finish">
          <div className="text-box">
            <h3>
              Thank you
            </h3>
			<p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              porttitor facilisis
            </p>
          </div>
	  <div>
	    <Link to="/request/req_volunteer">
	      <button className="btn btn-block helper-btn">
	    	Request
	      </button>
	    </Link>
	  </div>
        </section>
      </div>
    );
  }
}

export default Thankyou;

