/// <reference types="cypress" />


require('cypress-plugin-tab')
require('cypress-xpath')

describe("", () => {
  beforeEach(() => {
    // Ignora errores uncaught de scripts de terceros
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it("", () => {
    cy.visit("")
    cy.title().should('eq','Título de la página')
  })


}) // Cierre de describe