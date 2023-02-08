
it('Assertions Demo', () => {

  cy.visit('https://example.cypress.io')

  cy.contains('get').click()

  // Implicit Assertions in Cypress
  cy.get('#query-btn')
      .should('contain', 'Button')
      .and('have.class', 'query-btn')
      .and('be.visible')
      .and('be.enabled')

  // Explicit Assertions in Cypress
  expect(true).to.be.true

  assert.equal(4, '4', 'NOT EQUAL')
  assert.strictEqual(4, '4', 'NOT EQUAL')

})