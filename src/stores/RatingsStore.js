import { decorate, observable } from 'mobx'

import ApiService from '../services/api'

class RatingsStore {
  api = new ApiService()

  pendingMessage = ''
  pendingLoaded = false
  pending = []

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
}

decorate( RatingsStore, {
  pendingMessage: observable,
  pendingLoaded: observable,
  pending: observable,
})

export default RatingsStore
