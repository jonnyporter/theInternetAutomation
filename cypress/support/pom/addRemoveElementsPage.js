class AddRemoveElementsPage {

    /**
     * Visits the add remove elements page
     */
    visitPage() {
        return cy.visit("https://the-internet.herokuapp.com/add_remove_elements/");
    }

    /**
     * @returns the delete button
     */
    getDeleteButton() {
        return cy.get('button:contains("Delete")');
    }

    /**
     * @returns the add element button
     */
    getAddElementButton() {
        return cy.contains('button', 'Add Element');
    }
}

export default AddRemoveElementsPage;