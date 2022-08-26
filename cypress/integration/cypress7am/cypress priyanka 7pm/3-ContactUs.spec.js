///<reference types="cypress" />

describe('To verify signUp form functionality',()=>{
    Cypress.on('uncaught:exception',(err,runnable)=>{
    return false
})
it('Tc-01 To test with invalid email',()=>{
    cy.visit("https://www.zoomin.com/sign-up")
    cy.get('[name="name"]').type('Priyanka')
    cy.get('input[type="text"]').eq(1).type('pskgmail.com')
    cy.get('[class="number-input"]').type(8808534838)
    cy.get('[class="input-box"]').last().find('input').type('Priya123')
    cy.contains('SIGN UP').click()
    cy.get('[role="alert"]').should('contain','Please enter valid Email Address')

})
it('Tc-02 To test with valid credentials',()=>{
    cy.visit("https://www.zoomin.com/sign-up")
    cy.get('[name="name"]').type('Priyanka')
    cy.get('input[type="text"]').eq(1).type('psk@gmail.com')
    cy.get('[class="number-input"]').type(8808534838)
    cy.get('[class="input-box"]').last().find('input').type('Priya123')
    cy.contains('SIGN UP').click()
    //ways of assertion--
    //Give Assertion here

})
it('Tc-03 To test with invalid name',()=>{
    cy.visit("https://www.zoomin.com/sign-up")
    cy.get('[name="name"]').type('Pr')
    cy.get('input[type="text"]').eq(1).type('pskgmail.com')
    cy.get('[class="number-input"]').type(8808534838)
    cy.get('[class="input-box"]').last().find('input').type('Priya123')
    cy.contains('SIGN UP').click()
    cy.get('[class="validation-message"]').should('be.visible').and('contain','Name must have minimum three characters.')
})
})
//url-
//let cuurentUrl=cy.url()
//cy.log(url)