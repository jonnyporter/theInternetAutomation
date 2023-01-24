class CheckboxesPage {

    /**
     * @returns a checkbox, given an index number
     * @param indexNumber index of the checkbox
     */
    getCheckbox(indexNumber = 0) {
        return cy.get('input[type="checkbox"]').eq(indexNumber);
    }

    /**
     * Visits the checkboxes page
     */
    visitPage() {
        return cy.visit("https://the-internet.herokuapp.com/checkboxes");
    }
}

export default CheckboxesPage;