Cypress.Commands.add('realizaLogin', (username, password) => {
    cy.get('[data-test="username"]')
      .type(username)
      .should('have.value', username)

    cy.get('[data-test="password"]')
      .type(password)
      .should('have.value', password)

    cy.get('#login-button')
      .click()
} ) 