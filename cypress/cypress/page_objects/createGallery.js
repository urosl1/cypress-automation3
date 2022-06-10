class CreateGallery {

    get title() {
        return cy.get('#title');
    }

    get description() {
        return cy.get('#description');
    }

    get images() {
        // return cy.get([@type='url']);
        return cy.get('.form-control').eq(2);

    }


    get submit() {
        return cy.get('.btn.btn-custom').eq(0);
    }

    createGall(title, description, image) {

        this.title.type(title);
        this.description.type(description);
        this.images.type(image);
        this.submit.click();

    }

}

export const createGallery = new CreateGallery();







