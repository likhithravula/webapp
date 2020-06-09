/* eslint-disable no-undef, max-statements, no-magic-numbers */

const { START_URL } = require( '../../support/config' )
const deferred = require( '../../support/deferred' )
const { SAMPLE_HELPERS } = require( '../../support/samples' )

describe('Ratings / rate', () => {

  let listCallDeferred

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

    cy.get( '#navigation_bar .navbar-toggler-icon' )
    .click()

    cy.get( '#navigation_bar a' ).contains( 'Rate' )
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
      }
    })

    cy.get( 'a' ).contains( 'Click here to sign in' )
    .click()

    cy.get( 'h3' ).should( 'contain', 'Sign in' )

    cy.get( 'button' ).contains( 'Next' ).should( 'be.enabled' ).click()

    cy.get( 'h3' )
    .should( 'contain', 'Here you can see all people who need help' )

    cy.get( '#navigation_bar' ).should( 'be.visible' )

    cy.get( '#navigation_bar .navbar-toggler-icon' )
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
  })

})
