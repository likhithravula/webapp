import React from "react";
import { Link } from "react-router-dom";

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
	    <Link to="/request/reqVolunteer">
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

