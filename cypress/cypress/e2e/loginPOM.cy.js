/// <reference types="Cypress">

import { loginPage } from "../page_objects/loginPage";

describe('login POM', () => {

    let validEmail = "uros.letic00@gmail.com";
    let validPassword = "12345678";

    before('visit login page', () => {
        cy.visit('/');
        loginPage.loginBtn.click();
    })

    it('valid login using POM', () => {
        // cy.visit('/');
        // loginPage.loginBtn.click();
        cy.url().should('include', '/login');
        // loginPage.emailInput.type(validEmail);
        // loginPage.passwordInput.type(validPassword);
        // loginPage.submitBtn.click();
        loginPage.login(validEmail, validPassword);
        cy.url().should('not.include', '/login');
    })
})