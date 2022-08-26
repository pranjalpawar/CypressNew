///<reference types="cypress" />
//4 -folders
//fixtures
//integration
//plugins
//support

//<input type="text" name="username" id="username"></input>
//tagname
//id
//class
//common 

describe('To check login functionality',()=>{
    it('TC-01 To check login with valid cred',()=>{
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.get("#username").type('student')
        cy.get("#password").type('Password123')
        cy.get("#submit").click()
   //assertions ways-- 
        cy.get('h1[class="post-title"]').should('have.text','Logged In Successfully')
        cy.get('h1[class="post-title"]').should('contain','Logged In')   
        cy.url().should('contain','/logged-in-successfully/')  
        cy.get('h1[class="post-title"]').should('be.visible')
        cy.contains('Log out').should('be.visible')

    })
    it('TC-02 To check login with invalid username',()=>{
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.get("#username").type('stude')
        cy.get("#password").type('Password123')
        cy.get("#submit").click()
   //ways to Assert
         cy.get('#error').should('have.text','Your username is invalid!')
         cy.get('#error').should('be.visible')
   
    })
    it('TC-03 To check login with invalid passward',()=>{
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.get("#username").type('student')
        cy.get("#password").type('Password1')
        cy.get("#submit").click()
   //ways to Assert
        //Give Assertion for Passward 
    
    })

})

//To open test Runner------
//npx cypress open
