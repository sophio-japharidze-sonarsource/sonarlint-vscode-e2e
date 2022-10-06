import {trustProject} from "../util/common";

context('SonarLint Extension', () => {
    before(() => {
        cy.visit('http://localhost:8080')
    })

    it('Should load vscode', () => {
        cy.get('.explorer-viewlet').should('exist')
    })

    it('Should trust project', () => {
        trustProject()
    })
    //
    // it('Should show SonarLint Explorer Menu Items', () => {
    //     cy.contains('SonarLint Rules').should('exist')
    //     cy.contains('SonarLint Issue Locations').should('exist')
    //     cy.contains('SonarLint Connected Mode').should('exist')
    // })
})
