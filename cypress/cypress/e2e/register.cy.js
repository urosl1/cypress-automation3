describe('registration test', () => {


    let existingEmail = "uros.letic00@gmail.com";
    let firstName = "Uros";
    let lastName = "Letic";
    let password = "12345678";


    it('Go to gallery app registration page and verify all elements exist', () => {


        cy.visit('/register');
        cy.get('#first-name');
        cy.get('#last-name');
        cy.get('#email');
        cy.get('#password');
        cy.get('#password-confirmation');
        cy.get('.form-check-input');
        cy.get('.btn');
        cy.url().should('contain', '/register');
        cy.get('.nav-link').should('have.length', 3);

    })

    it('Go to gallery app registration page and correctly submit all credentials', () => {

        let email = Math.floor(Math.random() * 9999999);
        email = String(email) + "@gmail.com"
        // Cypress.env()
        // console.log(Cypress.env('register_url'))
        // console.log("URLsS");
        // console.log(url);
        cy.visit('/register');
        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('#password-confirmation').type(password);
        cy.get('.form-check-input').click();
        cy.get('.btn').click();
        cy.url().should('not.contain', '/register');
        cy.get('.nav-link').should('have.length', 4)

    })

    it('Go to gallery app registration page and submit empty form', () => {

        // Checking required fields, form should show alerts at all required fields.


        cy.visit('/register');
        cy.get('.btn').click();
        cy.url().should('contain', '/register');
        cy.get('.nav-link').should('have.length', 3)

    })

    it('Go to gallery app registration page and input mismatched passwords', () => {




        let email = Math.floor(Math.random() * 9999999);
        email = String(email) + "@gmail.com"
        cy.visit('/register');
        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('#password-confirmation').type(password + 1);
        cy.get('.form-check-input').click();
        cy.get('.btn').click();
        cy.url().should('contain', '/register');
        cy.get('.nav-link').should('have.length', 3)

    })

    it('Go to gallery app registration page and input incorrect mail form', () => {

        let email = Math.floor(Math.random() * 9999999);
        email = String(email) + "gmail.com"

        cy.visit('/register');
        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#email').type("uros.leticgmail.com");
        cy.get('#password').type(password);
        cy.get('#password-confirmation').type(password);
        cy.get('.form-check-input').click();
        cy.get('.btn').click();
        cy.url().should('contain', '/register');
        cy.get('.nav-link').should('have.length', 3)

    })

    it('Go to gallery app registration page and input already existing email', () => {


        cy.visit('/register');
        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#email').type(existingEmail);
        cy.get('#password').type(password);
        cy.get('#password-confirmation').type(password);
        cy.get('.form-check-input').click();
        cy.get('.btn').click();
        cy.url().should('contain', '/register');
        cy.get('.nav-link').should('have.length', 3)

    })

    it('Go to gallery app registration page, input password below 8 characters', () => {

        let email = Math.floor(Math.random() * 9999999);
        email = String(email) + "@gmail.com"
        cy.visit('/register');
        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#email').type(email);
        cy.get('#password').type(password.substring(2));
        cy.get('#password-confirmation').type(password.substring(2));
        cy.get('.form-check-input').click();
        cy.get('.btn').click();
        cy.url().should('contain', '/register');
        cy.get('.nav-link').should('have.length', 3)

    })

    it('Go to gallery app registration page, verify password and pass confirmation input is in hidden form', () => {


        cy.visit('/register');

        cy.get('#password').type(password);
        cy.get('#password-confirmation').type(password);
        cy
            .get('#password')
            .should('have.attr', 'type', "password");
        cy
            .get('#password-confirmation')
            .should('have.attr', 'type', "password");


    })

    it('Go to gallery app registration page, test password size length, 1000 chars', () => {

        function randomString(length = 1000) {
            return [...Array(length + 10)].map((value) => (Math.random() * 1000000).toString(36).replace('.', '')).join('').substring(0, length);
        };

        var randPassword = randomString();


        let email = Math.floor(Math.random() * 9999999);
        email = String(email) + "@gmail.com"
        // Cypress.env()
        // console.log(Cypress.env('register_url'))
        // console.log("URLsS");
        // console.log(url);
        cy.visit('/register');
        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#email').type(email);
        cy.get('#password').type(randPassword);
        cy.get('#password-confirmation').type(randPassword);
        cy.get('.form-check-input').click();
        cy.get('.btn').click();
        cy.wait(3000);
        cy.url().should('contain', '/register');
        cy.get('.nav-link').should('have.length', 3)

    })

});