describe('Página de home no sistema Swag Labs', () => {

    it('Cliente realiza o fluxo de compra de um produto no sistema', () => {
        cy.visit('https://www.saucedemo.com/v1/inventory.html')

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

        // apenas um teste
    })
})