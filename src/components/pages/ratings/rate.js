import { inject, observer } from "mobx-react";
import React from "react";
import { withRouter } from 'react-router';

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// TODO: read from profile
import profile from "../../../assets/img/volunteer.png";

class PendingEntry extends React.Component {

  constructor( props ) {
    super( props )

    this.setComment = this.setComment.bind( this )
  }

  setRating( value )
  {
    const { rating } = this.props.ratings

    rating.value = value
  }

  setComment( event ) {
    const { rating } = this.props.ratings
    const { value } = event.target

    rating.comment = value
  }

  async save() {
    const { history, ratings, user } = this.props

    const result = await ratings.save( user.data.id, user.token )

    if( result.success ) {
      ratings.pendingLoaded = false // force reload

      history.push( '/ratings/pending' )
    }
  }

  render() {
    const { rating, ratingMessage } = this.props.ratings
    const { user, value } = rating

    return (
      <div id="rate_form" className="wrapper">
        <section>
          <div className="text-box">
            <h3>Rate { user.firstName } { user.lastName }</h3>
            <p>How would you rate { user.firstName }?</p>
          </div>

          {
            ratingMessage &&
            (
              <div className="alert alert-danger">
                { ratingMessage }
              </div>
            )
          }

          <div id="volunteer-info" className="mt-4">
            <div className="profile-list">
              <div className="profile_info">
                <img alt="volunteer pic" src={ profile }/>
              </div>
              <div className="profile_info rating">
                <span className={
                    `rating_edit ${ value >= 10 ? 'rating_selected' : '' }`
                  }
                  onClick={ () => this.setRating(10) }
                />
                <span className={
                    `rating_edit ${ value >= 8 ? 'rating_selected' : '' }`
                  }
                  onClick={ () => this.setRating(8) }
                />
                <span className={
                    `rating_edit ${ value >= 6 ? 'rating_selected' : '' }`
                  }
                  onClick={ () => this.setRating(6) }
                />
                <span className={
                    `rating_edit ${ value >= 4 ? 'rating_selected' : '' }`
                  }
                  onClick={ () => this.setRating(4) }
                />
                <span className={
                    `rating_edit ${ value >= 2 ? 'rating_selected' : '' }`
                  }
                  onClick={ () => this.setRating(2) }
                />
              </div>
            </div>
          </div>
        </section>

        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              Do you have any message about his/her help?
            </Form.Label>
            <Form.Control as="textarea" rows="3"
              onChange={ this.setComment }
            />
          </Form.Group>
        </Form>

        <div className="mt-4">
          <Button className="btn btn-block helper-btn"
            onClick={ () => this.save() }
          >
            Confirm
          </Button>
        </div>
      </div>
    )
  }
}

export default withRouter(
  inject('ratings', 'user')( observer(PendingEntry) )
)
