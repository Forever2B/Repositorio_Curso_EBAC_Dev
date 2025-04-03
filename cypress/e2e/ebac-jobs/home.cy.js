/// <reference types="cypress" />

describe ('Testes do componente Principal', () => {
    beforeEach(() => {cy.visit('https://agenda-contatos-react.vercel.app')})

    it('Inclusão de novo contato a lista', () => {

        cy.get('input[type="text"]').type('Contato De Teste')
        cy.get('input[type="email"]').type('ContatoDeTeste@testegmail.com')
        cy.get('input[type="tel"]').type('11112222')
        cy.get('button[type="submit"]').click()

        cy.get('h2').should('contain.text', "4 contatos na agenda")
    })

    it('Alterar um contato existente', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()

        cy.get('input[type="text"]').clear().type('Contato EDITADO!!')
        cy.get('input[type="email"]').clear().type('ContatoEDITADO@testegmail.com')
        cy.get('input[type="tel"]').clear().type('4444')
        cy.get('button[type="submit"]').click()

        cy.get(':nth-child(5) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('contain.text', 'Contato EDITADO!!')
    })
    it('Deletar um contato da lista', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').should('exist').click().should('not.exist')
    })

}) 