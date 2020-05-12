import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class RequestConfirmation extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="registration_finish">
          <div className="text-box">
            <h3>Request has been submitted</h3>
            <p>
              New volunteers near your location will be able to see your
              request. When anyone chooses to help, you will receive their
              information and ratings and then you can choose whether you
              want them to help you or not. You can also use the map to ask
              volunteers for help directly.
            </p>
          </div>

          <div>
            <Link to="/request/map">
              <Button className="btn btn-block helper-btn">
                See the map with volunteers
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default RequestConfirmation;
