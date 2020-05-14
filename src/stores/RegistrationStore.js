import { decorate, observable } from 'mobx'

class RegistrationStore {
  termsOfServiceAccepted = false
  user = {}

  constructor()
    { this.clearUser() }

  clearUser() {
    this.user = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      addressStreet: '',
      addressPostalCode: '',
      addressCity: ''
    }
  }
}

decorate( RegistrationStore, {
  termsOfServiceAccepted: observable,
  user: observable
})

export default RegistrationStore
