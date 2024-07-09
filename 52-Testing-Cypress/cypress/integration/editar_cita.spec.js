/// <reference types="cypress" />

describe('Llena los campos para una nueva cita y la edita', () => {
    it('campos nueva cita', () => {

        cy.visit('/index.html');

        cy.get('[data-cy=mascota-input]')
            .type('Elih Freecs');

        cy.get('[data-cy=propietario-input]')
            .type('Hector');

        cy.get('[data-cy=telefono-input]')
            .type('13981398389');

        cy.get('[data-cy=fecha-input]')
            .type('2024-04-27');

        cy.get('[data-cy=hora-input]')
            .type('20:30');

        cy.get('[data-cy=sintomas-textarea]')
            .type('Michi Panque solo come y duerme');

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
            .should('have.class', 'alert-success')

    });

    it('Edita la cita', () => {
        cy.get('[data-cy="btn-editar"]').click();

        cy.get('[data-cy=mascota-input]')
            .clear()
            .type('Michi Panque turbo cargado');

        cy.get('[data-cy=submit-cita]')
            .click();

        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Guardado Correctamente');

        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-success')
    })
});