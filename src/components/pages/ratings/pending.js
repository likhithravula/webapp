import { inject, observer } from "mobx-react";
import React from "react";

import PendingEntry from './pendingEntry'

class RatingsPending extends React.Component {
  constructor( props ) {
    super( props )

    const { user, ratings } = props

    if( user.isLoggedIn() && !ratings.pendingLoaded )
      ratings.loadRatings( user.data.id, user.token )
  }

  render() {
    const { ratings } = this.props
    const { pending, pendingLoaded, pendingMessage, successMessage } = ratings

    return (
      <div className="wrapper">
        <section id="ratings_pending">
          <div className="text-box">
            <h3>Rate individual / volunteer</h3>
            <p>
              Lorem ipsum ...
            </p>
          </div>

          {
            successMessage &&
            (
              <div className="alert alert-info"
                onClick={ () => ratings.clearSuccessMessage() }
              >
                { successMessage }
              </div>
            )
          }

          {
            pendingMessage ?
            (
              <div className="alert alert-danger">
                { pendingMessage }
              </div>
            ) :
            pendingLoaded ?
            (
              <div id="volunteer-info" className="mt-4">
                {
                  pending.length ?
                    pending.map( entry =>
                      ( <PendingEntry key={ entry.id } data={ entry }/> )
                  ) : 'No pending ratings'
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
