import RatingsStore from '../RatingsStore'

import ApiService from '../../services/api'

jest.mock( '../../services/api' )

describe( 'RatingsStore', () => {

  let store

  beforeEach(() => {
    store = new RatingsStore()
  })

  it( 'should create an empty ratings store', () => {
    expect( store.pendingMessage ).toBe( '' )
    expect( store.pendingLoaded ).toBe( false )
    expect( store.pending ).toEqual([])
  })

  describe( 'loadRatings', () => {
    beforeEach(() => {
      ApiService.mockImplementation(() => (
      {
        listPendingRatings: () => (
        {
          helpers: [{}, {}],
          inneeds: [{}, {}],
        })
      }))

      store = new RatingsStore()
    })

    it( 'should load ratings', async () => {
      const result = await store.loadRatings( 10, 'xyz' )

      expect( result ).toEqual({ success: true })

      expect( store.pendingMessage ).toEqual( '' )
      expect( store.pendingLoaded ).toBe( true )
      expect( store.pending ).toEqual([{}, {}, {}, {}])
    })

    it( 'should catch message if there is any', async () => {
      ApiService.mockImplementation(() => (
      {
        listPendingRatings: () => ({ msg: 'error occurred' })
      }))

      store = new RatingsStore()

      const result = await store.loadRatings( 10, 'xyz' )

      expect( result.success ).toBe( false )

      expect( store.pendingMessage ).toEqual( 'error occurred' )
      expect( store.pendingLoaded ).toBe( true )
      expect( store.pending ).toEqual([])
    })

    it( 'should fail gracefully if the API call throws an error', async () => {
      ApiService.mockImplementation(() => (
      {
        listPendingRatings: () => { throw Error( 'Network crashed' ) }
      }))

      store = new RatingsStore()

      const result = await store.loadRatings( 10, 'xyz' )

      expect( result.success ).toBe( false )
      expect( result.error.message ).toEqual( 'Network crashed' )

      expect( store.pendingMessage ).toEqual( 'Request failed. Please try again later.' )
      expect( store.pendingLoaded ).toBe( true )
      expect( store.pending ).toEqual([])
    })
  })

})
