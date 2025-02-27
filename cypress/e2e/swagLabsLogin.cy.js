describe("Página de login no sistema Swag Labs", () => {
  const std_username = Cypress.env('std_user')
  const password = Cypress.env('password')
  const lou_username = Cypress.env('lou_user')
  const prb_username = Cypress.env('prb_user')
    
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
  })

  it('Cliente preenche os dados de standard_user para realizar o login', () => {

    cy.realizaLogin(std_username, password)
    
    cy.get('.product_label')
      .should('be.visible')
  })

  it('Cliente preenche o username correto mas a senha incorreta', () => {
    
    cy.realizaLogin(std_username, '1234')

    cy.get('h3[data-test="error"]')
      .should('be.visible')
  })

  it('Cliente locked_out_user não consegue se conectar no sistema', () => {

    cy.realizaLogin(lou_username, password)

    cy.contains('h3', 'Epic sadface: Sorry, this user has been locked out.')
  })

  it('Cliente acessa o sistema mas as imagens não carregam', () => {

    cy.realizaLogin(prb_username, password)

    cy.get('a[href="./inventory-item.html?id=4"] > .inventory_item_img')
      .should('have.attr','src','./img/red-tatt-1200x1500.jpgWithGarbageOnItToBreakTheUrl')
  })
})