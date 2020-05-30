/* eslint-disable no-undef, max-statements, no-magic-numbers */

const { START_URL } = require( '../../support/config' )

describe('registration / information', () => {

  beforeEach(() => {
    cy.visit( START_URL )

    cy.get( 'button' ).contains( 'Start creating your account' )
    .click()

    cy.get( 'h3' ).should( 'contain', 'Terms and conditions' )
    cy.get( 'input[name="termsOfService"]' ).click()
    cy.get( 'button' ).contains( 'Next' ).should( 'be.enabled' )
    .click()
  })

  it('should display the alternatives page', () => {
    cy.get( 'h3' ).should( 'contain', 'Choose the alternative' )

    cy.get( 'input[value="helper"]' ).should( 'not.be.checked' )
    cy.get( 'input[value="inneed"]' ).should( 'not.be.checked' )

    cy.get( 'button' ).contains( 'Next' ).should( 'be.disabled' )
  })

  it('should enable next button when volunteer role is selected', () => {
    cy.get( 'h3' ).should( 'contain', 'Choose the alternative' )

    cy.get( 'input[value="helper"]' ).click()

    cy.get( 'button' ).contains( 'Next' ).should( 'be.enabled' )
  })

  it('should enable next button when individual role is selected', () => {
    cy.get( 'h3' ).should( 'contain', 'Choose the alternative' )

    cy.get( 'input[value="inneed"]' ).click()

    cy.get( 'button' ).contains( 'Next' ).should( 'be.enabled' )
  })

  it('should navigate to the next page', () => {
    cy.get( 'h3' ).should( 'contain', 'Choose the alternative' )

    cy.get( 'input[value="helper"]' ).click()

    cy.get( 'button' ).contains( 'Next' ).should( 'be.enabled' )
    .click()

    cy.get( 'h3' ).should( 'not.contain', 'Choose the alternative' )
  })

})
