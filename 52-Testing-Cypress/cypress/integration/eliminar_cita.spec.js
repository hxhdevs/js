/// <reference types="cypress" />

describe('Llena los campos para una nueva cita y la elimina', () => {
    it('campos nueva cita', () => {

        cy.visit('/index.html');

        cy.get('[data-cy=mascota-input]')
            .type('Elih Freecs');

        cy.get('[data-cy=propietario-input]')
            .type('Hector Freecs');

        cy.get('[data-cy=telefono-input]')
            .type('13981398389');

        cy.get('[data-cy=fecha-input]')
            .type('2024-04-27');

        cy.get('[data-cy=hora-input]')
            .type('20:30');

        cy.get('[data-cy=sintomas-textarea]')
            .type('El humano bebe nuevo solo come y duerme');

        cy.get('[data-cy=submit-cita]')
            .click();

        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('equal', 'Administra tus Citas');

            // seleccionar la alerta
        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente')
    
        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-success');

        cy.screenshot();

    });

    it('Eliminar una Cita', () => {
        cy.get('[data-cy=btn-eliminar]')
            .click();

        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una');
    })
});