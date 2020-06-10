import { inject, observer } from "mobx-react";
import React from "react";

// TODO: read from profile
import profile from "../../../assets/img/volunteer.png";

class PendingEntry extends React.Component {

  render() {
    const { rating } = this.props.ratings
    const { user } = rating

    return (
      <div className="wrapper">
        <section id="ratings_pending">
          <div className="text-box">
            <h3>Rate { user.firstName } { user.lastName }</h3>
          </div>

          <div id="volunteer-info" className="mt-4">
            <div className="profile-list">
              <div className="profile_info">
                <img alt="volunteer pic" src={ profile }/>
              </div>
              <div className="profile_info">
                <p>
                  <span>&#9733;</span>
                  <span>&#9734;</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default inject('ratings')( observer(PendingEntry) )
