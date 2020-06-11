import { create, persist } from 'mobx-persist'

import NavigationStore from './NavigationStore'
import RatingsStore from './RatingsStore'
import RegistrationStore from './RegistrationStore'
import UserStore from './UserStore'

const hydrate = create({})

const userSchema = {
  token: true,
  data: {
    type: 'object',
    schema: {
      id: true,
      firstName: true,
      lastName: true, // TODO: add new persisted fields as necessary
    }
  }
}

class PersistentStore {
  navigation = new NavigationStore()
  ratings = new RatingsStore()
  registration = new RegistrationStore()
  user = persist( userSchema )( new UserStore() )

  constructor() {
    Promise.all([ // hydrate and persist stores as necessary
      this.navigation,
      this.ratings,
      this.registration,
      hydrate( 'user', this.user ),
    ])
  }
};

export default new PersistentStore()
