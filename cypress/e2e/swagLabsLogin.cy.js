describe("Página de login no sistema Swag Labs", () => {
    
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
  })

  it('Cliente preenche os dados de standard_user para realizar o login', () => {

    cy.get('[data-test="username"]')
      .type('standard_user')
      .should('have.value', 'standard_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')
      .should('have.value', 'secret_sauce')

    cy.get('#login-button')
      .click()

    cy.get('.product_label')
      .should('be.visible')
  })

})