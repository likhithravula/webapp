import React from "react";

class VolunteerMessage extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="volunteer_mesg">
          <div className="text-box">
            <h3>
              Welcome Jane
            </h3>
            <p>
              Here you can see where people need help.
              Click on the pins to see what people nearbuy need help with.
            </p>
          </div>

          <div>
	    Receiver Message
          </div>
        </section>
      </div>
    );
  }
}

export default VolunteerMessage;
