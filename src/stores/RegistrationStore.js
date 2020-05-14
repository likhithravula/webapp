import { decorate, observable } from 'mobx'

class RegistrationStore {
  termsOfServiceAccepted = false;

  user = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    addressStreet: '',
    addressPostalCode: '',
    addressCity: ''
  };
}

decorate( RegistrationStore, {
  termsOfServiceAccepted: observable,
  user: observable
})

export default RegistrationStore
