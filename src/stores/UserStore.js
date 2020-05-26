import { decorate, observable } from 'mobx'

import ApiService from '../services/api'

class UserStore {
  api = new ApiService()

  data = {}
}

decorate( UserStore, {
  data: observable
})

export default UserStore
