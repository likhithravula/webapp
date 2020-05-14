import { decorate, observable } from 'mobx'

class RegistrationStore {
  termsOfServiceAccepted = false
  user = {}

  constructor()
    { this.clear() }

  clear() {
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
