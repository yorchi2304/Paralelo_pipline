describe("Bienvenido", () =>{

    beforeEach(() => {
    // Ignora errores uncaught de scripts de terceros
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

    it("1er test", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")

        cy.log("Hola mundo")

    })

})//Cierre de describe