import CheckboxesPage from "../support/pom/CheckboxesPage";

const checkboxes = new CheckboxesPage();

describe('Checkboxes Page tests', () => {

  it('Expect checkbox 1 unchecked and checkbox 2 checked on page landing', () => {
    checkboxes.visitPage();
    checkboxes.getCheckbox(0).should('not.be.checked');
    checkboxes.getCheckbox(1).should('be.checked');
  });

  it('Verify checkbox 1 can be checked and checkbox 2 can be unchecked', () => {
    checkboxes.visitPage();
    checkboxes.getCheckbox(0).check().should('be.checked');
    checkboxes.getCheckbox(1).uncheck().should('not.be.checked');
  });
});