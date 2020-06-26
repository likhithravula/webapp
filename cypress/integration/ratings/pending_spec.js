/* eslint-disable no-undef, max-statements, no-magic-numbers */

const { START_URL } = require( '../../support/config' )
const deferred = require( '../../support/deferred' )
const { SAMPLE_HELPERS } = require( '../../support/samples' )

const selectRatingsPage = () =>
{
  cy.get( '#nav .navbar-toggler' ).first()
      .click()

  cy.get( '#responsive-navbar-nav div span' ).contains( 'Rate' )
      .should( 'be.visible' )
      .click()
}

describe('Ratings / pending', () => {

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

    cy.get( '#nav' ).should( 'be.visible' )

    cy.get( '#nav .navbar-toggler' )
        .should( 'be.visible' )
  })

  it('should show ratings page', () => {
    callDeferred.resolve({
      json: () => (
          {
            helpers: [],
            inneeds: []
          }),
      ok: true,
    })

    selectRatingsPage()

    cy.get( '#ratings_pending h3' ).contains( 'Rate individual / volunteer' )
        .should( 'be.visible' )
  })

  it('should show ratings page when there are no pending ratings', () => {
    callDeferred.resolve({
      json: () => (
          {
            helpers: [],
            inneeds: []
          }),
      ok: true,
    })

    selectRatingsPage()

    cy.get( '#ratings_pending div' ).contains( 'No pending ratings' )
        .should( 'be.visible' )
  })

  it('should show ratings page with ratings', () => {
    callDeferred.resolve({
      json: () => (
          {
            helpers: SAMPLE_HELPERS,
            inneeds: []
          }),
      ok: true,
    })

    selectRatingsPage()

    cy.get( '#ratings_pending div' ).find( 'div.profile-list' )
        .should( 'have.length', 2 )

    cy.get( '#rating_5' ).contains( 'Nancy' )
        .should( 'be.visible' )
    cy.get( '#rating_5' ).contains( 'Estrada' )
        .should( 'be.visible' )

    cy.get( '#rating_6' ).contains( 'Juan' )
        .should( 'be.visible' )
    cy.get( '#rating_6' ).contains( 'Tunas' )
        .should( 'be.visible' )
  })

  it('should display error message', () => {
    callDeferred.resolve({
      json: () => ({ msg: 'Could not retrieve ratings' }),
      ok: true,
    })

    selectRatingsPage()

    cy.get( 'div.alert-danger' )
        .should( 'contain', 'Could not retrieve ratings' )
  })

  it('should select user to rate', () => {
    callDeferred.resolve({
      json: () => (
          {
            helpers: SAMPLE_HELPERS,
            inneeds: []
          }),
      ok: true,
    })

    selectRatingsPage()

    cy.get( '#ratings_pending div' ).find( 'div.profile-list' )
        .should( 'have.length', 2 )

    cy.get( '#rating_5' ).contains( 'Nancy' )
        .should( 'be.visible' )
        .click()

    cy.get( '#rate_form h3' ).contains( 'Rate Nancy Estrada' )
        .should( 'be.visible' )
  })

})
