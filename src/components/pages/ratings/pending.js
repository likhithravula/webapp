import { inject, observer } from "mobx-react";
import React from "react";

class RatingsPending extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="ratings_pending">
          <div className="text-box">
            <h3>Rate helper / volunteer</h3>
            <p>
              Lorem ipsum ...
            </p>
          </div>

          <div className="mt-4">
             RATINGS
          </div>
        </section>
      </div>
    );
  }
}

export default inject('user')( observer(RatingsPending) );
