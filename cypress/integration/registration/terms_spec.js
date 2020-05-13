/* eslint-disable no-undef, max-statements, no-magic-numbers */

const { START_URL } = require( '../../support/config' )

describe('registration / terms of service', () => {

  it('should display the terms of service page', () => {
    cy.visit( START_URL )

    cy.get( 'button' ).contains( 'Start creating your account' )
    .click()

    cy.get( 'h3' ).should( 'contain', 'Terms of service' )

    cy.get( 'input[name="termsOfService"]' ).should( 'not.be.checked' )

    cy.get( 'button' ).contains( 'Next' ).should( 'be.disabled' )
  })

})
