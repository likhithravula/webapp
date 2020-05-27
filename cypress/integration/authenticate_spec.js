/* eslint-disable no-undef, max-statements, no-magic-numbers */

const { START_URL } = require( '../support/config' )
const deferred = require('../support/deferred')

describe('authentication', () => {

  let callDeferred

  beforeEach(() => {
    callDeferred = deferred()

    cy.visit( START_URL, {
      onBeforeLoad: window => {
        cy.stub( window, 'fetch' )
        .withArgs( Cypress.sinon.match(/user[/]auth/) )
        .as( 'authCall' )
        .returns( callDeferred.promise )
      }
    })

    cy.get( 'a' ).contains( 'Click here to sign in' )
    .click()
  })

  it('should display the sign in page', () => {
    cy.get( 'h3' ).should( 'contain', 'Sign in' )

    cy.get( 'button' ).contains( 'Next' ).should( 'be.visible' )
  })

  it('should log in a volunteer', () => {
    callDeferred.resolve({
      json: () => ({ token: 'ABCD' }),
      ok: true,
    })

    cy.get( 'h3' ).should( 'contain', 'Sign in' )

    cy.get( 'button' ).contains( 'Next' ).should( 'be.enabled' ).click()

    cy.get( '@authCall' ).should( 'be.called' )

    cy.get( 'h3' )
    .should( 'contain', 'Here you can see all people who need help' )
  })

  it('should display error message', () => {
    callDeferred.resolve({
      json: () => ({ msg: 'Could not authenticate user' }),
      ok: true,
    })

    cy.get( 'h3' ).should( 'contain', 'Sign in' )

    cy.get( 'button' ).contains( 'Next' ).should( 'be.enabled' ).click()

    cy.get( '@authCall' ).should( 'be.called' )

    cy.get( 'h3' ).should( 'contain', 'Sign in' )
    cy.get( 'div.alert-danger' )
    .should( 'contain', 'Could not authenticate user' )
  })

  it('should clear error message', () => {
    callDeferred.resolve({
      json: () => ({ msg: 'Could not authenticate user' }),
      ok: true,
    })

    cy.get( 'h3' ).should( 'contain', 'Sign in' )

    cy.get( 'button' ).contains( 'Next' ).should( 'be.enabled' ).click()

    cy.get( '@authCall' ).should( 'be.called' )

    cy.get( 'h3' ).should( 'contain', 'Sign in' )
    cy.get( 'div.alert-danger' ).as( 'message' )
    .should( 'contain', 'Could not authenticate user' )
    .click()

    cy.get( '@message' )
    .should( 'not.be.visible' )
  })

})
