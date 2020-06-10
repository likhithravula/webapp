import { decorate, observable } from 'mobx'

import ApiService from '../services/api'

class RatingsStore {
  api = new ApiService()

  pendingMessage = ''
  ratingMessage = ''
  successMessage = ''

  pendingLoaded = false
  pending = []
  rating = {
    user: {},
    value: 0,
    comment: ''
  }

  clearRating() {
    this.rating = {
      user: {},
      value: 0,
      comment: ''
    }

    this.ratingMessage = ''
  }

  clearSuccessMessage() {
    this.successMessage = ''
  }

  selectUser( user ) {
    this.rating.user = user
    this.rating.value = 0
    this.rating.comment = ''

    this.ratingMessage = ''
    this.successMessage = ''
  }

  async loadRatings( userId, token ) {
    if( !userId || !token )
      throw new Error( 'Invalid state. User not authenticated.' )

    this.pendingLoaded = false
    this.pending = []

    try {
      const response = await this.api.listPendingRatings( userId, token )

      if( response.helpers ) { // data was returned
        this.pendingMessage = ''
        this.pending = [ ...response.helpers, ...response.inneeds ]

        return { success: true }
      }
      else {
        this.pendingMessage = response.msg || 'An error occurred.'

        return { success: false, ...response }
      }
    } catch (error) {
      this.pendingMessage = 'Request failed. Please try again later.'

      return { success: false, error }
    } finally {
      this.pendingLoaded = true
    }
  }

  async save( userId, token ) {
    if( !userId || !token )
      throw new Error( 'Invalid state. User not authenticated.' )

    this.ratingMessage = ''
    this.successMessage = ''

    const rating = {
      fromUser: userId,
      toUser: this.rating.user.id,
      value: this.rating.value,
      comment: this.rating.comment
    }

    try {
      const response = await this.api.addRating( rating, token )

      if( response.id ) { // data was returned
        this.successMessage = `You have successfully rated ${ this.rating.user.firstName }`
        this.clearRating()

        return { success: true }
      }
      else {
        this.ratingMessage = response.msg || 'An error occurred.'

        return { success: false, ...response }
      }
    } catch (error) {
      this.ratingMessage = 'Request failed. Please try again later.'

      return { success: false, error }
    }
  }
}

decorate( RatingsStore, {
  pendingMessage: observable,
  pendingLoaded: observable,
  pending: observable,
  rating: observable,
  ratingMessage: observable,
  successMessage: observable,
})

export default RatingsStore
