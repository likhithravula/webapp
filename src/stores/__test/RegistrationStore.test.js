import RegistrationStore from '../RegistrationStore'

describe( 'RegistrationStore', () => {

  let store

  beforeEach(() => {
    store = new RegistrationStore()
  })

  it( 'should create an empty registration store', () => {
    expect( store.termsOfServiceAccepted ).toBe( false )
    expect( store.user ).toEqual( RegistrationStore.emptyUserData() )
  })

  it( 'should clear the user data', () => {
    store.user.firstName = 'x'
    store.user.lastName = 'x'
    store.user.phone = 'x'
    store.user.email = 'x'
    store.user.address.street = 'x'
    store.user.address.postalCode = 'x'
    store.user.address.city = 'x'

    store.clearUser()

    expect( store.user ).toEqual( RegistrationStore.emptyUserData() )
  })
})
