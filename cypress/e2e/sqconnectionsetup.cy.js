import {trustProject} from "../util/common";

context('Setting up SonarQube Connection', () => {
    before(() => {
        cy.visit('http://localhost:8080')
    })

    it('Should display buttons to connect to SQ and SC',  () => {
        cy.contains('SonarLint Connected Mode').click()
        cy.contains('Add SonarQube Connection').should('exist')
        cy.contains('Add SonarCloud Connection').should('exist')
    })

    it('Should display suggestion when auto-binding command is called', () => {
        cy.wait(2000)
        cy.get('.editor-container')
            .type('{meta+shift+p}')

        cy.focused().type('Bind All')
        cy.focused().type('{enter}')

        cy.contains('There are folders in your workspace that are not bound to any SonarQube/SonarCloud projects. Do you want to configure binding? Learn More').should('exist')
    })

    // it('Add SonarQube Connection button should open webview',  () => {
    //     cy.contains('Add SonarQube Connection').click()
    //     getWebviewBody()
    //         .should('exist')
    //
    //     cy.get('iframe.webview').iframe()
    //         .within(() => {
    //             cy.get('iframe#active-frame').iframe().get('body.vscode-light')
    //                 .then(k => {cy.log(k)})
    //         })
    //
    // })


})

function getWebviewBody() {
    return cy.get('iframe.webview')
        .its('0.contentDocument')
        .its('body')
        .get('iframe')
        .its('0.contentDocument')
        .within(() => {
            cy.get('body').should('exist')
        })
}

const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
};

