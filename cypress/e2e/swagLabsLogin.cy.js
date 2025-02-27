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

  it('Cliente preenche o username correto mas a senha incorreta', () => {
    
    cy.get('input[data-test="username"]')
      .type('standard_user')
      .should('have.value', 'standard_user')

    cy.get('input[data-test="password"]')
      .type('1234')
      .should('have.value', '1234')

    cy.get('input[id="login-button"]')
      .click()

    cy.get('h3[data-test="error"]')
      .should('be.visible')
  })

  it('Cliente locked_out_user não consegue se conectar no sistema', () => {

    cy.get('#user-name')
      .type('locked_out_user')
      .should('have.value', 'locked_out_user')

    cy.get('#password')
      .type('secret_sauce')
      .should('have.value', 'secret_sauce')
  
    cy.get('#login-button')
      .click()

    cy.contains('h3', 'Epic sadface: Sorry, this user has been locked out.')
  })

  it('Cliente acessa o sistema mas as imagens não carregam', () => {

    cy.get('#user-name')
      .type('problem_user')
      .should('have.value', 'problem_user')

    cy.get('#password')
      .type('secret_sauce')
      .should('have.value', 'secret_sauce')
  
    cy.get('#login-button')
      .click()

    cy.get('a[href="./inventory-item.html?id=4"] > .inventory_item_img')
      .should('have.attr','src','./img/red-tatt-1200x1500.jpgWithGarbageOnItToBreakTheUrl')
  })
})