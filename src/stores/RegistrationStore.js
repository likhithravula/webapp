import { decorate, observable } from 'mobx'

import ApiService from '../services/api'

const EMPTY_USER_DATA = {
  firstName: '',
  lastName: '',
  bankId: '',
  email: '',
  password: '', // TODO: will still be needed with new auth ?
  phone: '',
  address: {
    street: '',
    postalCode: '',
    city: '',
  },
  location: {
    latitude: '',
    longitude: '',
  },
  status: 0,
  role: '',
  about: ''
}

class RegistrationStore {
  api = new ApiService()

  message = ''
  termsOfServiceAccepted = false
  user = {}

  static emptyUserData() {
    return JSON.parse( JSON.stringify(EMPTY_USER_DATA) )
  }

  constructor() {
    this.clearUser()
  }

  clearMessage() {
    this.message = ''
  }

  clearUser() {
    this.user = RegistrationStore.emptyUserData()
  }

  async register() {
    let response = {}

    try {
      response = await this.api.addUser( this.user )

      this.message = response.token ? '' :
        response.msg || 'An error occurred.'
    } catch (error) {
      response = { error }

      this.message = 'Request failed. Please try again later.'
    }

    return response
  }
}

decorate( RegistrationStore, {
  message: observable,
  termsOfServiceAccepted: observable,
  user: observable
})

export default RegistrationStore
