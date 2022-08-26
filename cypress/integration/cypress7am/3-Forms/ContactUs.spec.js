
/// <reference types ="cypress"/>  

describe('verify functionality for contact us form', function () {

    beforeEach(function(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('be.visible').and('have.text','CONTACT US')
    })

    it('verify the functionality for contact us form - Submit Button',function(){
        cy.get('input[name="first_name"]').type('pranjali')
        cy.get('input[name="last_name"]').type('pawar')
        cy.get('input[name="email"]').type('ppranjali94@gmail.com')
        cy.get('textarea[name="message"]').type('I am learning js')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })

    it('verify the functionality for contact us form - Reset Button',function(){
        cy.get('input[name="first_name"]').type('pranjali')
        cy.get('input[name="last_name"]').type('pawar')
        cy.get('input[name="email"]').type('ppranjali94@gmail.com')
        cy.get('textarea[name="message"]').type('I am learning js')
        cy.get('input[value="RESET"]').click()
        
        // validating after reset 

        cy.get('input[name="first_name"]').should('have.text','')
        cy.get('input[name="last_name"]').should('have.text','')
        cy.get('input[name="email"]').should('have.text','')
        cy.get('textarea[name="message"]').should('have.text','')
        
    })

     it.only('verify the functionality for contact us form - Invalid Email address',function(){
        
        cy.get('input[name="first_name"]').type('pranjali')
        cy.get('input[name="last_name"]').type('pawar')
        cy.get('input[name="email"]').type('ppranjali94gmail.com')
        cy.get('textarea[name="message"]').type('I am learning js')
        cy.get('input[value="SUBMIT"]').click()
       //cy.get('body').should('have.text','Error: Invalid email address')
        cy.get('body').should('contain','Invalid email address')  
    })

})