import RegistrationStore from '../RegistrationStore'

import ApiService from '../../services/api'

jest.mock( '../../services/api' )

describe( 'RegistrationStore', () => {

  let store

  beforeEach(() => {
    ApiService.mockImplementation(() => (
    {
      addUser: () => ({ token: 'ABC' })
    }))

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

  it( 'should register user data', async () => {
    store.user.firstName = 'x'
    store.user.lastName = 'y'

    const result = await store.register()

    expect( result ).toEqual({ token: 'ABC' })
    expect( store.message ).toEqual( '' )
  })

  it( 'should catch message if there is any', async () => {
    ApiService.mockImplementation(() => (
    {
      addUser: () => ({ message: 'error occurred' })
    }))

    store = new RegistrationStore()

    store.user.firstName = 'x'
    store.user.lastName = 'y'

    const result = await store.register()

    expect( result ).toEqual({ message: 'error occurred' })
    expect( store.message ).toEqual( 'error occurred' )
  })

  it( 'should fail gracefully if the API call throws an error', async () => {
    ApiService.mockImplementation(() => (
    {
      addUser: () => { throw Error( 'Network crashed' ) }
    }))

    store = new RegistrationStore()

    store.user.firstName = 'x'
    store.user.lastName = 'y'

    const result = await store.register()

    expect( result.error.message ).toEqual( 'Network crashed' )
    expect( store.message ).toEqual( 'Request failed. Please try again later.' )
  })
})
