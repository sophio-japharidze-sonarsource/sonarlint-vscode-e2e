export function trustProject() {
    cy.contains('Yes, I trust the authors')
        .click()
}