import { decorate, observable } from 'mobx'

class UserStore {
  termsOfServiceAccepted = false
}

decorate( UserStore, {
  termsOfServiceAccepted: observable
})

export default UserStore
