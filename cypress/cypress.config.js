const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://gallery-app.vivifyideas.com/',
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
  },
});
