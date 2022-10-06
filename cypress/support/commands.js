Cypress.Commands.add('iframe', { prevSubject: 'element' }, $iframe => {
    return new Cypress.Promise(resolve => {
        $iframe.ready(function() {
            resolve($iframe.contents().find('body'));
        });
    });
});