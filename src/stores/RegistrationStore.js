import { decorate, observable } from 'mobx'

class RegistrationStore {
  termsOfServiceAccepted = false
  user = {}
}

decorate( RegistrationStore, {
  termsOfServiceAccepted: observable,
  user: observable
})

export default RegistrationStore
