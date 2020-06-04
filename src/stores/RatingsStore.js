import { decorate, observable } from 'mobx'

import ApiService from '../services/api'

class RatingsStore {
  api = new ApiService()

  message = ''
  pendingLoaded = false
  pending = []

  clearMessage() {
    this.message = ''
  }

  async loadRatings( userId, token ) {
    if( !userId || !token )
      throw new Error( 'Invalid state. User not authenticated.' )

    this.pendingLoaded = false
    this.pending = []

    try {
      const response = await this.api.listPendingRatings( userId, token )

      if( response.helpers ) { // data was returned
        this.message = ''
        this.pending = [ ...response.helpers, ...response.inneeds ]

        return { success: true }
      }
      else {
        this.message = response.msg || 'An error occurred.'

        return { success: false, ...response }
      }
    } catch (error) {
      this.message = 'Request failed. Please try again later.'

      return { success: false, error }
    } finally {
      this.pendingLoaded = true
    }
  }
}

decorate( RatingsStore, {
  message: observable,
  pendingLoaded: observable,
  pending: observable,
})

export default RatingsStore
