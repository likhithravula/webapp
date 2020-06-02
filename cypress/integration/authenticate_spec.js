/* eslint-disable no-undef, max-statements, no-magic-numbers */

const { START_URL } = require( '../support/config' )
const deferred = require('../support/deferred')

describe('authentication', () => {

  let callDeferred

  beforeEach(() => {
    callDeferred = deferred()

    cy.visit( START_URL, {
      onBeforeLoad: window => {
        const fetchStub = cy.stub( window, 'fetch' )

        fetchStub.withArgs( Cypress.sinon.match(/user[/]auth/) )
        .as( 'authCall' )
        .returns( callDeferred.promise )

        fetchStub.withArgs( Cypress.sinon.match(/user[/]14[/]logout/) )
        .as( 'logoutCall' )
        .returns({})
      }
    })

    cy.get( 'a' ).contains( 'Click here to sign in' )
    .click()
  })

  it('should display the sign in page', () => {
    cy.get( 'h3' ).should( 'contain', 'Sign in' )

    cy.get( 'button' ).contains( 'Next' ).should( 'be.visible' )

    cy.get( '#navigation_bar' ).should( 'not.exist' )
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

    cy.get( '#navigation_bar' ).should( 'be.visible' )
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

  describe('Logged in', () => {
    beforeEach(() => {
      callDeferred.resolve({
        json: () => ({ id: 14, token: 'ABCD' }),
        ok: true,
      })

      cy.get( 'h3' ).should( 'contain', 'Sign in' )

      cy.get( 'button' ).contains( 'Next' ).should( 'be.enabled' ).click()

      cy.get( 'h3' )
      .should( 'contain', 'Here you can see all people who need help' )

      cy.get( '#navigation_bar' ).should( 'be.visible' )

      cy.get( '#navigation_bar .navbar-toggler-icon' )
      .should( 'be.visible' )
    })

    it('should show menu', () => {
      cy.get( '#navigation_bar .navbar-toggler-icon' )
      .click()

      cy.get( '#navigation_bar a' ).contains( 'Leaderboard' )
      .should( 'be.visible' )

      cy.get( '#navigation_bar a' ).contains( 'My profile' )
      .should( 'be.visible' )

      cy.get( '#navigation_bar a' ).contains( 'Pending status and history' )
      .should( 'be.visible' )

      cy.get( '#navigation_bar a' ).contains( 'Rate persona' )
      .should( 'be.visible' )

      cy.get( '#navigation_bar a' ).contains( 'Logout' )
      .should( 'be.visible' )
    })

    it('should log out a volunteer', () => {
      cy.get( '#navigation_bar .navbar-toggler-icon' )
      .click()

      cy.get( '#navigation_bar a' ).contains( 'Logout' ).click()

      cy.get( '#navigation_bar' ).should( 'not.exist' )

      cy.get( 'h1' ).should( 'contain', 'The digital volunteer helper' )
    })

  })

})
