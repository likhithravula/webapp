/* eslint-disable no-undef, max-statements, no-magic-numbers */

const { START_URL } = require( '../../support/config' )

describe('registration / terms of service', () => {

  beforeEach(() => {
    cy.visit( START_URL )

    cy.get( 'button' ).contains( 'Start creating your account' )
    .click()
  })

  it('should display the terms of service page', () => {
    cy.get( 'h3' ).should( 'contain', 'Terms of service' )

    cy.get( 'input[name="termsOfService"]' ).should( 'not.be.checked' )

    cy.get( 'button' ).contains( 'Next' ).should( 'be.disabled' )
  })

  it('should accept the terms of service', () => {
    cy.get( 'h3' ).should( 'contain', 'Terms of service' )

    cy.get( 'input[name="termsOfService"]' ).click()

    cy.get( 'button' ).contains( 'Next' ).should( 'be.enabled' )
  })

  it('should disable again the navigation if terms of service are clicked again', () => {
    cy.get( 'h3' ).should( 'contain', 'Terms of service' )

    cy.get( 'input[name="termsOfService"]' ).click()

    cy.get( 'button' ).contains( 'Next' ).should( 'be.enabled' )

    cy.get( 'input[name="termsOfService"]' ).click()

    cy.get( 'button' ).contains( 'Next' ).should( 'be.disabled' )
  })

  it('should navigate to the next page', () => {
    cy.get( 'h3' ).should( 'contain', 'Terms of service' )

    cy.get( 'input[name="termsOfService"]' ).click()

    cy.get( 'button' ).contains( 'Next' ).should( 'be.enabled' ).click()

    cy.get( 'h3' ).contains( 'Terms of service' )
    .should( 'not.be.visible' )
  })

})
