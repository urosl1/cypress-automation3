/// <reference types="Cypress">
import { loginPage } from "../page_objects/loginPage";
import { allGalleries } from "../page_objects/allGalleries";

describe('allGalleriesTest', () => {

    let filterInput = "Infrastructure";


    before('visit login page', () => {
        cy.visit('https://gallery-app.vivifyideas.com/');
    })

    it('Search test with input', () => {

        allGalleries.search(filterInput);
        cy.visit('https://gallery-app.vivifyideas.com');
        cy.get('.box-title').should('not.contain', title);
    })
})