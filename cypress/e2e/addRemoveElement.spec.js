import AddRemoveElementsPage from "../support/pom/AddRemoveElementsPage";

const addRemoveElements = new AddRemoveElementsPage();

describe('Add Remove Element Page tests', () => {

  it('Testing adding an element', () => {
    addRemoveElements.visitPage();
    addRemoveElements.getDeleteButton().should('not.exist');
    addRemoveElements.getAddElementButton().click();
    addRemoveElements.getDeleteButton().should('be.visible');
  });

  it('Test adding multiple elements', () => {
    addRemoveElements.visitPage();
    addRemoveElements.getAddElementButton().click();
    addRemoveElements.getDeleteButton().eq(0).should('be.visible');    
    addRemoveElements.getAddElementButton().click();
    addRemoveElements.getDeleteButton().eq(1).should('be.visible');
  });

  it('Can add and delete multiple elements on a page', () => {
    addRemoveElements.visitPage();
    addRemoveElements.getAddElementButton().click();
    addRemoveElements.getAddElementButton().click();
    addRemoveElements.getAddElementButton().click();
    addRemoveElements.getDeleteButton().eq(0).should('be.visible');
    addRemoveElements.getDeleteButton().eq(1).should('be.visible');
    addRemoveElements.getDeleteButton().eq(2).should('be.visible');
    addRemoveElements.getDeleteButton().eq(2).click();
    addRemoveElements.getDeleteButton().eq(1).click();
    addRemoveElements.getDeleteButton().eq(0).click();
    addRemoveElements.getDeleteButton().should('not.exist');
  });
});