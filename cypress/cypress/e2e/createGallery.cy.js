/// <reference types="Cypress">
import { allGalleries } from "../page_objects/allGalleries";
import { createGallery } from "../page_objects/createGallery";

describe('Create a Gallery', () => {

    let imageURL = "https://static.remove.bg/remove-bg-web/eb1bb48845c5007c3ec8d72ce7972fc8b76733b1/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg";
    let title = "Girl with glasses";
    let description = "Within a beach background";
    let emailLogin = "kss2@gmail.com";
    let passLogin = "12345678";



    before('Gallery creation', () => {
        cy.visit('https://gallery-app.vivifyideas.com/login');
        cy.get('#email').type(emailLogin);
        cy.get('#password').type(passLogin);
        cy.get('.btn.btn-custom').click();
        cy.wait(3000);
        cy.visit('https://gallery-app.vivifyideas.com/create');

    })

    it('Gallery creation', () => {

        createGallery.createGall(title, description, imageURL);

    })
})