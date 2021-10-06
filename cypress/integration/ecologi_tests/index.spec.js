describe('index page', () => {

    beforeEach(() => {
        //navigate to locally hosted project URL
        cy.visit('http://localhost:3000/');
    });

    describe('github banner', () => {
        it('should be visible and have correct URL', () => {
            //check element displays
            cy.get('[cy-data=github-header]');
            //check link displays and has expected href 
            //(would leave this out if URL changes alot as test wouldconstantly need updating)
            cy.get('[cy-data=github-header-link]').should('have.attr', 'href').and('include', 'https://github.com/vercel/next.js/tree/canary/examples/blog-starter');
            /*
            Cypress does not allow you to navigate to a different origin URL within a single test easily.
            If we were using a url on our domain, I would click it like below
            cy.get('[cy-data=github-header-link]').click();
            cy.url().should('eq', 'https://github.com/vercel/next.js/tree/canary/examples/blog-starter')
            */
        });
    });

    describe('intro block', () => {
        it('should be visible and contain correct data & links', () => {
            /* 
             If we wanted to go deeper and check the text we can do so as below
             I would not recommend as it would make tests a bit more flakey
             I would usually just stick to the element showing in most tests
             */
            cy.get('[cy-data=intro-block]');
            cy.get('[cy-data=intro-main-header]').contains("Blog.");
            cy.get('[cy-data=intro-sub-header]').contains("A statically generated blog example using");
            cy.get('[cy-data=intro-sub-header-url]').should('have.attr', 'href').and('include', 'https://nextjs.org/');
        });
    });

    //rather than doing everything in a big block like previous,
    //you can also make smaller 'it' statements for readability like as follows
    describe('hero block', () => {
        it('cover image should be visible and have valid image link', () => {
            cy.get('[cy-data=cover-image]').should('have.attr', 'src').and('include', 'image'); //here we would check for whatever the usual base image url is
        });

        it('hero post title should display and be interactable', () => {
            //checking that the title is not blank
            cy.get('[cy-data=hero-post-link]').then(($linkText) => {
                expect($linkText.text()).to.not.be.empty;
            });
            //check url link, click the URL, ensure URL we were on matches the src URL
            //This is a bit extreme but adding it to just show what we can do
            cy.get('[cy-data=hero-post-link]').invoke('attr', 'href').then((href) => {
                cy.get('[cy-data=hero-post-link]').click();
                cy.url().should('eq', "http://localhost:3000" + href);
            });
        });

        it('the date the hero blog was posted should be visible', () => {
            cy.get('[cy-data=hero-post-date]').then(($dateText) => {
                expect($dateText.text()).to.not.be.empty;
            });
        });

        it('the excerpt of the hero blog should be visible and not empty', () => {
            cy.get('[cy-data=hero-post-excerpt]').then(($excerptText) => {
                expect($excerptText.text()).to.not.be.empty;
            });
        });

        it('the hero post authors details should be visible', () => {
            cy.get('[cy-data=avatar-image]').should('have.attr', 'src').and('include', 'assets/blog/authors');
            /* 
            Here is an example of checking for a particular class
            This could be useful for ensuring styles do not change after code changes
            but will have to be updated anytime a style is changed
            */
            cy.get('[cy-data=avatar-name]').should('have.class', 'text-xl font-bold');
            cy.get('[cy-data=avatar-name]').then(($nameText) => {
                expect($nameText.text()).to.not.be.empty;
            });
        });
    });

    describe('More Stories block', () => {

        it('Each post-preview should have the elements we expect', () => {
            //make sure that we have at least 1 post preview
            cy.get('[cy-data=more-stories-block]').children().its('length').should('be.gte', 1);
            //loop through each post-preview did we have, and check its HTML for the data
            let postsChecked = 1;
            cy.get('[cy-data=more-stories-block]').children().each(($el) => {
                //check important elements are present for each post-preview
                expect($el.html()).to.contain('cy-data="cover-image"');
                expect($el.html()).to.contain('cy-data="post-preview-link"');
                expect($el.html()).to.contain('cy-data="post-preview-date"');
                expect($el.html()).to.contain('cy-data="post-preview-excerpt"');
                expect($el.html()).to.contain('cy-data="avatar-image');
                expect($el.html()).to.contain('cy-data="avatar-name');
                cy.log(postsChecked + " post previews have been checked so far");
                postsChecked++;
            })
        });
    });

    describe('Footer block', () => {
        it("Should have a nextJS banner showing", () => {
            cy.get('[cy-data=NextJS-footer-text]').contains("Statically Generated with Next.js.");
        });

        it("Should have a button that links to the NextJS documentation", () => {
            cy.get('[cy-data=NextJS-documentation-link]').contains("Read Documentation");
            cy.get('[cy-data=NextJS-documentation-link]').should('have.attr', 'href').and('include', 'https://nextjs.org/docs/basic-features/pages');
        });

        it("Should have a link to the github repository", () => {
            cy.get('[cy-data=NextJS-github-link]').should('have.attr', 'href').and('include', 'https://github.com/vercel/next.js/tree/canary/examples/blog-starter');
        });
    });
});