/* eslint-disable no-undef, max-statements, no-magic-numbers */

const { START_URL } = require( '../../support/config' )
const deferred = require( '../../support/deferred' )
const { SAMPLE_HELPERS } = require( '../../support/samples' )

describe('Ratings / rate', () => {

  let listCallDeferred, rateCallDeferred

  const selectRatingsForm = () =>
  {
    listCallDeferred.resolve({
      json: () => (
          {
            helpers: SAMPLE_HELPERS,
            inneeds: []
          }),
      ok: true,
    })

    cy.get( '#nav .navbar-toggler' )
        .click()

    cy.get( '#nav div span' ).contains( 'Rate' )
        .should( 'be.visible' )
        .click()

    cy.get( '#ratings_pending div' ).find( 'div.profile-list' )
        .should( 'have.length', 2 )

    cy.get( '#rating_5' ).contains( 'Nancy' )
        .should( 'be.visible' )
        .click()

    cy.get( '#rate_form h3' ).contains( 'Rate Nancy Estrada' )
        .should( 'be.visible' )
  }

  beforeEach(() => {
    listCallDeferred = deferred()
    rateCallDeferred = deferred()

    cy.visit( START_URL, {
      onBeforeLoad: window => {
        const fetchStub = cy.stub( window, 'fetch' )

        fetchStub.withArgs( Cypress.sinon.match(/user[/]auth/) )
            .returns(
                {
                  json: () => ({ id: 14, token: 'ABCD' }),
                  ok: true,
                })

        fetchStub.withArgs( Cypress.sinon.match(/user[/]14[/]ratings[/]pending/) )
            .returns( listCallDeferred.promise )

        fetchStub.withArgs( Cypress.sinon.match(/rating$/) )
            .returns( rateCallDeferred.promise )
      }
    })

    cy.get( 'a' ).contains( 'Click here to sign in' )
        .click()

    cy.get( 'h3' ).should( 'contain', 'Sign in' )

    cy.get( 'button' ).contains( 'Next' ).should( 'be.enabled' ).click()

    cy.get( 'h3' )
        .should( 'contain', 'Here you can see all people who need help' )

    cy.get( '#nav' ).should( 'be.visible' )

    cy.get( '#nav .navbar-toggler' )
        .should( 'be.visible' )
  })

  it('should show rate form', () => {
    selectRatingsForm()

    cy.get( '#rate_form .rating' ).find( '.rating_edit' )
        .should( 'have.length', 5 )

    cy.get( '#rate_form .rating' ).find( '.rating_selected' )
        .should( 'have.length', 0 )

    cy.get( '#rate_form textarea' )
        .should( 'be.visible' )
        .should( 'have.value', '' )

    cy.get( '#rate_form button' ).contains( 'Confirm' )
        .should( 'be.visible' )
        .should( 'be.enabled' )
  })

  it('should select rating value', () => {
    selectRatingsForm()

    cy.get( '#rate_form .rating' ).find( '.rating_edit:nth-child(2)' )
        .click()

    cy.get( '#rate_form .rating' ).find( '.rating_selected' )
        .should( 'have.length', 4 ) // goes in reverse order, child 2 corresponds to 4 stars

    cy.get( '#rate_form .rating' ).find( '.rating_edit:first-child' )
        .click()

    cy.get( '#rate_form .rating' ).find( '.rating_selected' )
        .should( 'have.length', 5 ) // goes in reverse order, child 1 corresponds to 5 stars
  })

  it('should set the comment', () => {
    selectRatingsForm()

    cy.get( '#rate_form textarea' ).as( 'comments_field' )
        .clear().type( 'awesome!' ).blur()

    cy.wait( 100 )

    cy.get( '@comments_field' )
        .should( 'have.value', 'awesome!' )
  })

  it('should save the rating', () => {
    rateCallDeferred.resolve({
      json: () => ({ id: 344 }),
      ok: true,
    })

    selectRatingsForm()

    cy.get( '#rate_form .rating' ).find( '.rating_edit:nth-child(2)' )
        .click()

    cy.get( '#rate_form textarea' )
        .clear().type( 'awesome!' ).blur()

    cy.wait( 100 )

    cy.get( '#rate_form button' ).contains( 'Confirm' )
        .should( 'be.visible' )
        .click()

    cy.get( '#rate_form' ).should( 'not.exist' )

    cy.get( '#ratings_pending h3' ).contains( 'Rate individual / volunteer' )
        .should( 'be.visible' )

    cy.get( '#ratings_pending .alert-info' )
        .contains( 'You have successfully rated Nancy' )
        .should( 'be.visible' )
        .click()

    cy.get( '#ratings_pending .alert-info' )
        .should( 'not.exist' )
  })

  it('should show a rating error message', () => {
    rateCallDeferred.resolve({
      json: () => ({ msg: 'Invalid user' }),
      ok: true,
    })

    selectRatingsForm()

    cy.get( '#rate_form .rating' ).find( '.rating_edit:nth-child(2)' )
        .click()

    cy.get( '#rate_form textarea' )
        .clear().type( 'awesome!' ).blur()

    cy.wait( 100 )

    cy.get( '#rate_form button' ).contains( 'Confirm' )
        .should( 'be.visible' )
        .click()

    cy.wait( 100 )

    cy.get( '#rate_form h3' ).contains( 'Rate Nancy Estrada' )
        .should( 'be.visible' )

    cy.get( '#rate_form .alert-danger' ).contains( 'Invalid user' )
        .should( 'be.visible' )
  })

})
