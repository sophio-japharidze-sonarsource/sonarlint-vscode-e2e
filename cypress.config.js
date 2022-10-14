const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    supportFile: 'cypress/support/commands.js',
    specPattern: [
        "cypress/e2e/welcome.cy.js",
        "cypress/e2e/sqConnectionSetup.cy.js",
        "cypress/e2e/autoBinding.cy.js"
    ],
    includeShadowDom: true,
    chromeWebSecurity: false
  }
})