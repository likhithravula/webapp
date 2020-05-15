/* eslint-disable no-undef, max-statements, no-magic-numbers */

const { START_URL } = require( '../../support/config' )

describe('registration / information', () => {

  beforeEach(() => {
    cy.visit( START_URL )

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
    cy.get( 'input[name="addressStreet"]' ).should( 'have.value', '' )
    cy.get( 'input[name="addressPostalCode"]' ).should( 'have.value', '' )
    cy.get( 'input[name="addressCity"]' ).should( 'have.value', '' )

    cy.get( 'button' ).contains( 'Next' ).should( 'be.disabled' )
  })

  it('should fill data on the information page', () => {
    cy.get( 'h3' ).should( 'contain', 'Fill in your information' )

    cy.get( 'input[name="firstName"]' ).type( 'Juan' )
    cy.get( 'input[name="lastName"]' ).type( 'Perez' )
    cy.get( 'input[name="phone"]' ).type( '12345678' )
    cy.get( 'input[name="email"]' ).type( 'juan@mail.com' )
    cy.get( 'input[name="addressStreet"]' ).type( 'Street 23' )
    cy.get( 'input[name="addressPostalCode"]' ).type( '12345' )
    cy.get( 'input[name="addressCity"]' ).type( 'Stockholm' ).blur()

    cy.get( 'input[name="firstName"]' ).should( 'have.value', 'Juan' )
    cy.get( 'input[name="lastName"]' ).should( 'have.value', 'Perez' )
    cy.get( 'input[name="phone"]' ).should( 'have.value', '12345678' )
    cy.get( 'input[name="email"]' ).should( 'have.value', 'juan@mail.com' )
    cy.get( 'input[name="addressStreet"]' ).should( 'have.value', 'Street 23' )
    cy.get( 'input[name="addressPostalCode"]' ).should( 'have.value', '12345' )
    cy.get( 'input[name="addressCity"]' ).should( 'have.value', 'Stockholm' )

    cy.get( 'button' ).contains( 'Next' ).should( 'be.disabled' )
  })

})
