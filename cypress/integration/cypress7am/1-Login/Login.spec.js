/// <reference types ="cypress"/>  
// line no 1 for auto suggestion for cypress methods 
// test senario 
describe('verify the login functionality', function () {

    it('validate login with correct credentials', function () {
        // steps goes here 
        // <input name="txtUsername" id="txtUsername" type="text"></input>
        //      css selectors
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('h1').should('be.visible').and('have.text', 'Dashboard')
    })
    it.only('vaildate login with invalid credentials', function () {
        // steps goes here 
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin1211')
        cy.get('#btnLogin').click()
        cy.get('#spanMessage').should('be.visible').and('have.text','Invalid credentials')
    })
})










































// cypress install command
// npm init
// npm install cypress@9.7
// npm install npx
// npm cypress open
// occure time out error ====>
// node modules===>cypress===> lib ===> tasks ===> verify .js ===> line no 40 ===> instead of 30000 we can refer 100000
// npm cypress open

// test senario ===> what to test
// testcase ===> how to test 
