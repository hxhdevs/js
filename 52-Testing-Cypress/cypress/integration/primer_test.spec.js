/// <reference types="cypress">

describe('',()=>{
    it('Carga la pagina principal',()=>{
        cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html')

        cy.contains('h1','Administrador de Pacientes de Veterinaria')

        cy.get('h1').should('exist');

        cy.get('[data-cy="titulo-proyecto"]').should('exist');

        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('equal','No hay Citas, comienza creando una');
        
        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('not.equal', 'Elih')
    })
})