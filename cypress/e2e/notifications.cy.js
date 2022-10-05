context('SonarLint Extension', () => {
    before(() => {
        cy.visit('http://localhost:8080')
    })

    it('Should load vscode', () => {
        cy.get('.explorer-viewlet').should('exist')
    })

    it('Should trust project', () => {
        cy.contains('Yes, I trust the authors').click()
    })

    it('Should show SonarLint Explorer Menu Items', () => {
        cy.contains('SonarLint Rules').should('exist');
        cy.contains('SonarLint Issue Locations').should('exist');
        cy.contains('SonarLint Connected Mode').should('exist');
    })

    it('Should display buttons to connect to SQ and SC',  () => {
        cy.contains('SonarLint Connected Mode').click();
        cy.contains('Add SonarQube Connection').should('exist');
        cy.contains('Add SonarCloud Connection').should('exist');
    })
})
