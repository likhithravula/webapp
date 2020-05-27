import UserStore from '../UserStore'

import ApiService from '../../services/api'

jest.mock( '../../services/api' )

describe( 'UserStore', () => {

  let store

  beforeEach(() => {
    ApiService.mockImplementation(() => (
    {
      authenticateUser: () => ({ token: 'ABC' })
    }))

    store = new UserStore()
  })

  it( 'should create an empty user store', () => {
    expect( store.message ).toBe( '' )
    expect( store.data ).toEqual({})
  })

  it( 'should login user', async () => {
    const result = await store.login()

    expect( result ).toEqual({ token: 'ABC' })
    expect( store.message ).toEqual( '' )
  })

  it( 'should catch message if there is any', async () => {
    ApiService.mockImplementation(() => (
    {
      authenticateUser: () => ({ msg: 'error occurred' })
    }))

    store = new UserStore()

    const result = await store.login()

    expect( result ).toEqual({ msg: 'error occurred' })
    expect( store.message ).toEqual( 'error occurred' )
  })

  it( 'should fail gracefully if the API call throws an error', async () => {
    ApiService.mockImplementation(() => (
    {
      authenticateUser: () => { throw Error( 'Network crashed' ) }
    }))

    store = new UserStore()

    const result = await store.login()

    expect( result.error.message ).toEqual( 'Network crashed' )
    expect( store.message ).toEqual( 'Request failed. Please try again later.' )
  })
})
