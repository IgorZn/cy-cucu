import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const urls = {
    'Google': 'https://google.com'
}

Given(`I open {string} page`, (url) => {
    if (url in urls){
        cy.visit(urls[url])
    } else {
        cy.visit('https://'+url)
    }
});

Then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title)
})

