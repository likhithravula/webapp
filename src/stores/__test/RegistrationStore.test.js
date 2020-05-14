import RegistrationStore from '../RegistrationStore'

const EMPTY_USER = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  addressStreet: '',
  addressPostalCode: '',
  addressCity: ''
}

describe( 'RegistrationStore', () => {

  let store

  beforeEach(() => {
    store = new RegistrationStore()
  })

  it( 'should create an empty registration store', () => {
    expect( store.termsOfServiceAccepted ).toBe( false )
    expect( store.user ).toEqual( EMPTY_USER )
  })

  it( 'should clear the user data', () => {
    store.user.firstName = 'x'
    store.user.lastName = 'x'
    store.user.phone = 'x'
    store.user.email = 'x'
    store.user.addressStreet = 'x'
    store.user.addressPostalCode = 'x'
    store.user.addressCity = 'x'

    store.clearUser()

    expect( store.user ).toEqual( EMPTY_USER )
  })
})
