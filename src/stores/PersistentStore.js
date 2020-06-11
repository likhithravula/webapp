import { create } from 'mobx-persist'

import NavigationStore from './NavigationStore'
import RatingsStore from './RatingsStore'
import RegistrationStore from './RegistrationStore'
import UserStore from './UserStore'

const hydrate = create({})

class PersistentStore {
  navigation = new NavigationStore()
  ratings = new RatingsStore()
  registration = new RegistrationStore()
  user = new UserStore()

  constructor() {
    Promise.all([
      hydrate( 'navigation', this.navigation ),
      hydrate( 'ratings', this.ratings ),
      hydrate( 'registration', this.registration ),
      hydrate( 'user', this.user ),
    ])
  }
};

export default new PersistentStore()
