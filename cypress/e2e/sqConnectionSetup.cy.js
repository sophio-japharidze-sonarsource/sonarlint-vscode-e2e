context('Setting up SonarQube Connection', () => {
    before(() => {
        cy.visit('http://localhost:8080')
    })

    it('Should display buttons to connect to SQ and SC',  () => {
        cy.contains('SonarLint Connected Mode').click()
        cy.contains('Add SonarQube Connection').should('exist')
        cy.contains('Add SonarCloud Connection').should('exist')
    })
})

