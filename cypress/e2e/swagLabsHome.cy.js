describe('Página de home no sistema Swag Labs', () => {

    // Area de testes para verificar se os elementos citados estao visiveis na tela
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/inventory.html')
    })

    // Teste necessario para verificacao do carrinho e confirmar que ele esteja funcional
    it('Cliente testa a funcao do carrinho', () => {
        
        cy.get('.shopping_cart_link')
            .click()
        
        cy.get('.btn_action')
            .should('be.visible')

    })

    // Teste necessario para verificar se e possivel deslogar do sistema
    it('Cliente testa a funcao de menu', () => {

        cy.get('.bm-burger-button > button')
            .click()

        cy.get('#about_sidebar_link')
            .should('be.visible')
    })

    // Teste necessario para verificar se o cliente consegue organizar os produtos na pagina de acordo com a ordenacao alfabetica ao contrario
    it("Cliente organiza os produtos no com o alfabeto ao contrario", () => {
        
        cy.get('.product_sort_container')
            .select('Name (Z to A)')
            .should('have.value', 'za')

        cy.get('.inventory_list > :nth-child(1)')
            .contains('Test.allTheThings() T-Shirt (Red)')

        cy.get('.inventory_list > :nth-child(6)')
            .contains('Sauce Labs Backpack')

    })

    // Teste que verifica se ao clicar em um produto, se abre uma nova pagina
    it.only("Cliente clica em um produto para ver mais detalhes de um produto", () => {
        cy.get('#item_4_title_link > .inventory_item_name')
            .click()

        cy.url()
            .should("be.equal","https://www.saucedemo.com/v1/inventory-item.html?id=4")
    })

    // Teste para verificar ordenacao de produtos pelo valor crescente
    it("Cliente organiza os produtos no com o alfabeto ao contrario", () => {
        
        cy.get('.product_sort_container')
            .select('Price (low to high)')
            .should('have.value', 'lohi')

        cy.get(':nth-child(1) > .pricebar > .inventory_item_price')
            .contains('7.99')
            .should('be.visible')

        cy.get(':nth-child(6) > .pricebar > .inventory_item_price')
            .contains('49.99')
            .should('be.visible')
    })

    // Teste que verifica adicao dos itens no carrinho
    it("Cliente adiciona todos os itens ao carrinho", () => {

        cy.get(':nth-child(1) > .pricebar > .btn_primary')
            .click()
        
        cy.get(':nth-child(2) > .pricebar > .btn_primary')
            .click()
        
        cy.get(':nth-child(3) > .pricebar > .btn_primary')
            .click()

        cy.get(':nth-child(4) > .pricebar > .btn_primary')
            .click()

        cy.get(':nth-child(5) > .pricebar > .btn_primary')
            .click()

        cy.get(':nth-child(6) > .pricebar > .btn_primary')
            .click()

        cy.get('.shopping_cart_link')
            .click()
        
        cy.contains("Sauce Labs Backpack")
        cy.contains("Sauce Labs Bike Light")
        cy.contains("Sauce Labs Bolt T-Shirt")
        cy.contains("Sauce Labs Fleece Jacket")
        cy.contains("Sauce Labs Onesie")
        cy.contains("Test.allTheThings() T-Shirt (Red)")
        
    })

    // Teste necessario para verificar se o fluxo principal da pagina esta funcional
    it('Cliente realiza o fluxo de compra de um produto no sistema', () => {
        
        cy.get(':nth-child(1) > .pricebar > .btn_primary')
            .click()
        
        cy.get('.shopping_cart_link')
            .click()

        cy.get('.btn_action')
            .click()
        
        cy.get('[data-test="firstName"]')
            .type('Standard')
            .should('have.value', 'Standard')

        cy.get('[data-test="lastName"]')
            .type('Username')
            .should('have.value', 'Username')
        
        cy.get('[data-test="postalCode"]')
            .type('05018-020')
            .should('have.value', '05018-020')

        cy.get('.btn_primary')
            .click()

        cy.get('.btn_action')
            .click()
        
        cy.contains('THANK YOU FOR YOUR ORDER')
    })
})