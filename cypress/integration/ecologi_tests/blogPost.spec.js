describe('blog post page', () => {

    beforeEach(() => {
        //navigate to locally hosted project URL
        cy.visit('http://localhost:3000/');
        cy.get('[cy-data=hero-post-link]').click();
        //this ensures the redirect worked and we are not still on homepage
        cy.url().should('not.eq', 'http://localhost:3000/');
    });

    describe("back to homepage link", () => {
        it("should display correctly and bring me to homepage on click", () => {
            cy.get('[cy-data=back-to-homepage-link]').should('have.class', 'hover:underline');
            cy.get('[cy-data=back-to-homepage-link]').click();
            cy.url().should('eq', 'http://localhost:3000/');
        });
    });

    describe("blog post header", () => {
        it("should display correctly and have the correct style", () => {
            //check that the header exists and is not empty
            cy.get('[cy-data=blogPost-title]').then(($titleText) => {
                expect($titleText.text()).to.not.be.empty;
            });
            //check that the style classes are correct. This feels like something
            //we would want to know about if it changes
            cy.get('[cy-data=blogPost-title]').should('have.class', 'text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left');
        });
    });

    describe("avatar section", () => {
        /*
        I do not have time to do it in the 3hr period needed to do this assignment
        but instead of checking for this again on this page (Already do on homepage)
        I would abstract these checks out into more like a component test which would house
        the tests for the avatar, and then we get rid of this code and would only need to
        do something like 'avatar = new avatar()' and it would do these checks on every page with this included.
        I have not done this with cypress before unfortunately so would need to read up on how I could get
        it to work. Same goes for the other tests repeated on this page.
        */
        it('the hero post authors details should be visible', () => {
            cy.get('[cy-data=avatar-image]').should('have.attr', 'src').and('include', 'assets/blog/authors');
            cy.get('[cy-data=avatar-name]').should('have.class', 'text-xl font-bold');
            cy.get('[cy-data=avatar-name]').then(($nameText) => {
                expect($nameText.text()).to.not.be.empty;
            });
        });
    });

    describe("cover image", () => {
        it('cover image should be visible and have valid image link', () => {
            cy.get('[cy-data=cover-image]').should('have.attr', 'src').and('include', 'image'); //here we would check for whatever the usual base image url is
        });
    });

    describe("blog content body", () => {
        it('should be visible, not empty and have the correct style', () => {
            cy.get('[cy-data=blogPost-body]').then(($bodyText) => {
                expect($bodyText.text()).to.not.be.empty;
            });
            cy.get('[cy-data=blogPost-body]').should('have.class', 'max-w-2xl mx-auto');
            /*
            If I had more time/reading there is probably something cool we could do here
            when it comes to testing that markdown is working correctly, make if we had a predefined
            blog post so we knew exactly what should be marked as what it would be cool
            */
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