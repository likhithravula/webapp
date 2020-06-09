import { inject, observer } from "mobx-react";
import React from "react";
import { withRouter } from 'react-router';

// TODO: read from profile
import profile from "../../../assets/img/volunteer.png";

class PendingEntry extends React.Component {

  openRating() {
    const { data, history, ratings } = this.props

    ratings.selectUser( data )

    history.push( '/ratings/rate' )
  }

  render() {
    const { data } = this.props

    return (
      <div id={ `rating_${ data.id }` }
        className="profile-list"
        onClick={ () => this.openRating() }
      >
        <div className="profile_info">
          <img alt="volunteer pic" src={ profile }/>
        </div>
        <div className="profile_info">
          <p>{ data.firstName } { data.lastName }</p>
        </div>
      </div>
    )
  }
}

export default withRouter(
  inject('ratings')( observer(PendingEntry) )
)
