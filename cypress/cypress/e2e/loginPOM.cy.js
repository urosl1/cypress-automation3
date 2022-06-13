/// <reference types="Cypress">

import { loginPage } from "../page_objects/loginPage";
const faker = require('@faker-js/faker');

describe('login POM', () => {

    console.log(faker.internet.password());
    let validEmail = "uros.letic00@gmail.com";
    let validPassword = "123456789";

    before('visit login page', () => {
        cy.visit('/');
        loginPage.loginBtn.click();
    })

    xit('valid login using POM', () => {


        cy.url().should('include', '/login');
        cy.url().should('not.include', '/login');
    })

    it('invalid login using POM', () => {


        // cy.url().should('include', '/login');
        loginPage.login(validEmail, validPassword);
        // cy.url().should('not.include', '/login');
        loginPage.errorMessage.should('be.visible')
            .and('have.text', 'Bad Credentials')
            .and('have.css', 'background-color', 'rgb(248, 215, 218)');

    })
})