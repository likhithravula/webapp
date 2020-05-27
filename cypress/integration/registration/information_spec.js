/* eslint-disable no-undef, max-statements, no-magic-numbers */

const { START_URL } = require( '../../support/config' )
const deferred = require('../../support/deferred')

const fillValidValues = () => {
  cy.get( 'input[name="firstName"]' ).type( 'Juan' )
  cy.get( 'input[name="lastName"]' ).type( 'Perez' )
  cy.get( 'input[name="phone"]' ).type( '12345678' )
  cy.get( 'input[name="email"]' ).type( 'juan@mail.com' )
  cy.get( 'input[name="street"]' ).type( 'Street 23' )
  cy.get( 'input[name="postalCode"]' ).type( '12345' )
  cy.get( 'input[name="city"]' ).type( 'Stockholm' ).blur()
}

describe('registration / information', () => {

  let callDeferred

  beforeEach(() => {
    callDeferred = deferred()

    cy.visit( START_URL, {
      onBeforeLoad: window => {
        cy.stub( window, 'fetch' )
        .withArgs( Cypress.sinon.match(/user/) )
        .as( 'userCall' )
        .returns( callDeferred.promise )
      }
    })

    cy.get( 'button' ).contains( 'Start creating your account' )
    .click()

    cy.get( 'h3' ).should( 'contain', 'Terms of service' )
    cy.get( 'input[name="termsOfService"]' ).click()
    cy.get( 'button' ).contains( 'Next' ).should( 'be.enabled' )
    .click()

    cy.get( 'h3' ).should( 'contain', 'Choose the alternative' )
    cy.get( 'input[value="inneed"]' ).click()

    cy.get( 'button' ).contains( 'Next' ).should( 'be.enabled' )
    .click()

    cy.get( 'h3' ).should( 'contain', 'Create an account' )
    cy.get( 'button' ).contains( 'Next' ).should( 'be.enabled' )
    .click()
  })

  it('should display the information page', () => {
    cy.get( 'h3' ).should( 'contain', 'Fill in your information' )

    cy.get( 'input[name="firstName"]' ).should( 'have.value', '' )
    cy.get( 'input[name="lastName"]' ).should( 'have.value', '' )
    cy.get( 'input[name="phone"]' ).should( 'have.value', '' )
    cy.get( 'input[name="email"]' ).should( 'have.value', '' )
    cy.get( 'input[name="street"]' ).should( 'have.value', '' )
    cy.get( 'input[name="postalCode"]' ).should( 'have.value', '' )
    cy.get( 'input[name="city"]' ).should( 'have.value', '' )

    cy.get( 'button' ).contains( 'Next' ).should( 'be.enabled' ) // TODO: will change
  })

  it('should fill data on the information page', () => {
    cy.get( 'h3' ).should( 'contain', 'Fill in your information' )

    fillValidValues()

    cy.get( 'input[name="firstName"]' ).should( 'have.value', 'Juan' )
    cy.get( 'input[name="lastName"]' ).should( 'have.value', 'Perez' )
    cy.get( 'input[name="phone"]' ).should( 'have.value', '12345678' )
    cy.get( 'input[name="email"]' ).should( 'have.value', 'juan@mail.com' )
    cy.get( 'input[name="street"]' ).should( 'have.value', 'Street 23' )
    cy.get( 'input[name="postalCode"]' ).should( 'have.value', '12345' )
    cy.get( 'input[name="city"]' ).should( 'have.value', 'Stockholm' )

    cy.get( 'button' ).contains( 'Next' ).should( 'be.enabled' )
  })

  describe('registration / information / invoke', () => {
    it('should register user', () => {
      callDeferred.resolve({
        json: () => ({ token: 'ABCD' }),
        ok: true,
      })

      cy.get( 'h3' ).should( 'contain', 'Fill in your information' )

      fillValidValues()

      cy.get( 'button' ).contains( 'Next' ).should( 'be.enabled' )
      .click()

      cy.get( '@userCall' ).should( 'be.called' )

      cy.get( 'h3' ).should( 'contain', 'Congratulations' )
    })

    it('should display error message', () => {
      callDeferred.resolve({
        json: () => ({ msg: 'Could not create user' }),
        ok: true,
      })

      cy.get( 'h3' ).should( 'contain', 'Fill in your information' )

      fillValidValues()

      cy.get( 'button' ).contains( 'Next' ).should( 'be.enabled' )
      .click()

      cy.get( '@userCall' ).should( 'be.called' )

      cy.get( 'h3' ).should( 'contain', 'Fill in your information' )
      cy.get( 'div.alert-danger' )
      .should( 'contain', 'Could not create user' )
    })

    it('should clear error message', () => {
      callDeferred.resolve({
        json: () => ({ msg: 'Could not create user' }),
        ok: true,
      })

      cy.get( 'h3' ).should( 'contain', 'Fill in your information' )

      fillValidValues()

      cy.get( 'button' ).contains( 'Next' ).should( 'be.enabled' )
      .click()

      cy.get( '@userCall' ).should( 'be.called' )

      cy.get( 'h3' ).should( 'contain', 'Fill in your information' )
      cy.get( 'div.alert-danger' ).as( 'message' )
      .should( 'be.visible' )
      .should( 'contain', 'Could not create user' )
      .click()

      cy.get( '@message' )
      .should( 'not.be.visible' )
    })
  })

})
