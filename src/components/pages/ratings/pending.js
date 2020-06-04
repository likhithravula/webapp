import { inject, observer } from "mobx-react";
import React from "react";

class RatingsPending extends React.Component {
  constructor( props ) {
    super( props )

    const { user, ratings } = props

    if( user.isLoggedIn() && !ratings.pendingLoaded )
      ratings.loadRatings( user.data.id, user.token )
  }

  render() {
    const { ratings } = this.props
    const { message, pending, pendingLoaded } = ratings

    return (
      <div className="wrapper">
        <section id="ratings_pending">
          <div className="text-box">
            <h3>Rate individual / volunteer</h3>
            <p>
              Lorem ipsum ...
            </p>
          </div>

          <div className={ `alert alert-danger ${ message ? '' : 'd-none' }` }
            onClick={ () => ratings.clearMessage() }
          >
            { message }
          </div>

          {
            pendingLoaded ?
            (
              <div className="mt-4">
                 {
                   pending.length ?
                     'List of pending ratings'
                   :
                     'No pending ratings'
                 }
              </div>
            ) : ( <div>Loading...</div> )
          }
        </section>
      </div>
    );
  }
}

export default inject('ratings', 'user')( observer(RatingsPending) );
