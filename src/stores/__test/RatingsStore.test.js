import RatingsStore from '../RatingsStore'

import ApiService from '../../services/api'

jest.mock( '../../services/api' )

const EMPTY_RATING = { user: {}, value: 0, comment: '' }

describe( 'RatingsStore', () => {

  let store

  beforeEach(() => {
    store = new RatingsStore()
  })

  it( 'should create an empty ratings store', () => {
    expect( store.pendingMessage ).toBe( '' )
    expect( store.successMessage ).toBe( '' )
    expect( store.ratingMessage ).toBe( '' )

    expect( store.pendingLoaded ).toBe( false )
    expect( store.pending ).toEqual([])
    expect( store.rating ).toEqual( EMPTY_RATING )
  })

  describe( 'selectUser', () => {
    it( 'should select the user to rate', async () => {
      store.selectUser({ id: 10, firstName: 'Jack', lastName: 'Rock' })

      expect( store.rating ).toEqual(
      {
        user: { id: 10, firstName: 'Jack', lastName: 'Rock' },
        value: 0,
        comment: ''
      })
    })
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

  describe( 'save', () => {
    beforeEach(() => {
      ApiService.mockImplementation(() => (
      {
        addRating: () => ({ id: 342 })
      }))

      store = new RatingsStore()
    })

    it( 'should save ratings', async () => {
      store.selectUser({ id: 10, firstName: 'Jack', lastName: 'Rock' })
      store.rating.value = 8
      store.rating.comment = 'Awesome !!!'

      const result = await store.save( 10, 'xyz' )

      expect( store.ratingMessage ).toEqual( '' )
      expect( store.successMessage ).toEqual( 'You have successfully rated Jack' )
      expect( store.rating ).toEqual( EMPTY_RATING )

      expect( result ).toEqual({ success: true })
    })

    it( 'should catch message if there is any', async () => {
      ApiService.mockImplementation(() => (
      {
        addRating: () => ({ msg: 'error occurred' })
      }))

      store = new RatingsStore()

      store.selectUser({ id: 10, firstName: 'Jack', lastName: 'Rock' })
      store.rating.value = 8
      store.rating.comment = 'Awesome !!!'

      const currentRating = { ...store.rating }

      const result = await store.save( 10, 'xyz' )

      expect( result.success ).toBe( false )

      expect( store.ratingMessage ).toEqual( 'error occurred' )
      expect( store.successMessage ).toEqual( '' )
      expect( store.rating ).toEqual( currentRating )
    })

    it( 'should fail gracefully if the API call throws an error', async () => {
      ApiService.mockImplementation(() => (
      {
        addRating: () => { throw Error( 'Network crashed' ) }
      }))

      store = new RatingsStore()

      store.selectUser({ id: 10, firstName: 'Jack', lastName: 'Rock' })
      store.rating.value = 8
      store.rating.comment = 'Awesome !!!'

      const currentRating = { ...store.rating }

      const result = await store.save( 10, 'xyz' )

      expect( result.success ).toBe( false )

      expect( store.ratingMessage ).toEqual( 'Request failed. Please try again later.' )
      expect( store.successMessage ).toEqual( '' )
      expect( store.rating ).toEqual( currentRating )
    })
  })

})
