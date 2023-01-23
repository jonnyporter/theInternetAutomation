describe('Add Remove Element Page tests', () => {

  it('Testing adding an element', () => {
    cy.visit('https://the-internet.herokuapp.com/add_remove_elements/');

    cy.contains('button', 'Delete').should('not.exist');

    cy.contains('button', 'Add Element').click();

    cy.contains('button', 'Delete').should('be.visible');
  });

  it('Test adding multiple elements', () => {
    cy.visit('https://the-internet.herokuapp.com/add_remove_elements/');

    cy.contains('button', 'Add Element').click();

    cy.contains('button', 'Delete').eq(0).should('be.visible');    
    
    cy.contains('button', 'Add Element').click();

    cy.contains('button', 'Delete').eq(1).should('be.visible');
  });
});