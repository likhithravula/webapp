import React from "react";
import { Link } from "react-router-dom";

class RequestMap extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="registration_finish">
          <div className="text-box">
            <h3>
              Here you can see all people who can help
            </h3>
            <p>
              Here you can see where people who can help are located.
              Click on the pins to see information about the volunteers.
            </p>
          </div>

          <div>
            Filter pins and map...
          </div>
        </section>
      </div>
    );
  }
}

export default RequestMap;
