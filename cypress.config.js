const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jii6y6',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

      viewportWidth: 1300,  //Se configura el ancho de la ventana por default en cypress 
      viewportHeight: 720, //Se configura el alto de la ventana por default en cypress
      chromeWebSecurity: false,
      defaultCommandTimeout:15000, //Tiempo máximo de carga de los comando aplica cuando se carga miles de registros
      pageLoadTimeout: 60000,   //Tiempo máximo de espera para cargar la página de inicio
      projectId: "jii6y6"



});
