/* eslint-disable no-undef, max-statements, no-magic-numbers */

const { START_URL, TEST_SERVER } = require( '../support/config' )
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

    cy.get( '#responsive-navbar-nav' ).should( 'not.be.visible' )
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

    cy.get( '.navbar-toggler' ).first().click()
    cy.get( '#responsive-navbar-nav' ).should( 'be.visible' )
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

      cy.get( '#nav' ).should( 'be.visible' )

      cy.get( '#nav .navbar-toggler' )
          .should( 'be.visible' )
    })

    it('should show menu', () => {
      cy.get( '#nav .navbar-toggler' )
          .click()

      cy.get( '#nav div span' ).contains( 'Login' )
          .should( 'not.be.visible' )

      cy.get( '#nav div span' ).contains( 'Leaderboard' )
          .should( 'be.visible' )

      cy.get( '#nav div span' ).contains( 'My profile' )
          .should( 'be.visible' )

      cy.get( '#nav div span' ).contains( 'Pending status and history' )
          .should( 'be.visible' )

      cy.get( '#nav div span' ).contains( 'Rate' )
          .should( 'be.visible' )

      cy.get( '#nav div span' ).contains( 'Logout' )
          .should( 'be.visible' )
    })

    it('should show menu bar even if the page is refreshed', () => { // here we are testing that user token persistence is working
      cy.visit( `${ TEST_SERVER }/helper/map` )

      cy.get( '#nav' ).should( 'be.visible' )
    })

    it('should log out a volunteer', () => {

      cy.get( '#nav .navbar-toggler' )
          .click()

      cy.get( '#nav div span' ).contains( 'Logout' ).click()

      cy.get( '.mr-auto' ).first().should( 'not.be.visible' )

      cy.get( 'h1' ).should( 'contain', 'The digital volunteer helper' )
    })

  })

})
