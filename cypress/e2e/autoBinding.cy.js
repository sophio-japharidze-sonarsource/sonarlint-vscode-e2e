context('Auto-binding suggestions', () => {
    before(() => {
        cy.visit('http://localhost:8080')
    })

    it('Should display suggestion when auto-binding command is called', () => {
        cy.wait(2000)
        cy.get('.editor-container')
            .type('{meta+shift+p}')

        cy.focused().type('Bind All')
        cy.focused().type('{enter}')

        cy.contains('There are folders in your workspace that are not bound to any SonarQube/SonarCloud projects. Do you want to configure binding? Learn More').should('exist')
    })
})
