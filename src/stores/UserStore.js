import { decorate, observable } from 'mobx'

import ApiService from '../services/api'

class UserStore {
  api = new ApiService()

  token = null
  data = {}
  message = ''

  clearMessage() {
    this.message = ''
  }

  async login() {
    let response = {}

    try {
      response = await this.api.authenticateUser( this.data )

      if( response.token ) {
        this.message = ''

        const { token, ...data } = response
        this.token = token
        this.data = data
      }
      else
        this.message = response.msg || 'An error occurred.'
    } catch (error) {
      response = { error }

      this.message = 'Request failed. Please try again later.'
    }

    return response
  }

  async update() {
    if( !this.token )
      throw new Error( 'Invalid state. User not authenticated.' )

    try {
      const response = await this.api.updateUser( this.data, this.token )

      if( response.email ) { // updated user data was returned
        this.message = ''
        this.data = { ...response }

        return { success: true }
      }
      else {
        this.message = response.msg || 'An error occurred.'

        return { success: false, ...response }
      }
    } catch (error) {
      this.message = 'Request failed. Please try again later.'

      return { success: false, error }
    }
  }

  async logout() {
    if( !this.token )
      throw new Error( 'Invalid state. User not authenticated.' )

    try {
      await this.api.logout( this.data.id, this.token )
    } finally {
      this.token = null
      this.data = {}
    }
  }
}

decorate( UserStore, {
  data: observable,
  message: observable
})

export default UserStore
