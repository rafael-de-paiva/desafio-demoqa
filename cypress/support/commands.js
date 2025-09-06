Cypress.Commands.add('followWindow', (trigger) => {
  cy.window().then((win) => {
    cy.stub(win, 'open').as('winOpen');
  });
  trigger(); 
  cy.get('@winOpen')
    .should('have.been.called')               
    .its('firstCall.args.0')                  
    .then((url) => {
      cy.window().then((win) => {
        const abs = new URL(url || '', win.location.origin).href;
        win.location.assign(abs);           
      });
    });
});