/* eslint-disable no-undef, max-statements, no-magic-numbers */

const { START_URL } = require( '../../support/config' )
const deferred = require('../../support/deferred')

describe('authentication', () => {

  let callDeferred

  beforeEach(() => {
    callDeferred = deferred()

    cy.visit( START_URL, {
      onBeforeLoad: window => {
        const fetchStub = cy.stub( window, 'fetch' )

        fetchStub.withArgs( Cypress.sinon.match(/user[/]auth/) )
        .as( 'authCall' )
        .returns(
        {
          json: () => ({ id: 14, token: 'ABCD' }),
          ok: true,
        })

        fetchStub.withArgs( Cypress.sinon.match(/user[/]14[/]ratings[/]pending/) )
        .as( 'ratingsCall' )
        .returns( callDeferred.promise )
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

  it('should show ratings page', () => {
    cy.get( '#navigation_bar .navbar-toggler-icon' )
    .click()

    cy.get( '#navigation_bar a' ).contains( 'Rate' )
    .should( 'be.visible' )
    .click()

    cy.get( '#ratings_pending h3' ).contains( 'Rate helper / volunteer' )
    .should( 'be.visible' )
  })

})
