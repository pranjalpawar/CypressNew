///<reference types="cypress" />

beforeEach(()=>{
    cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
})

describe('To check checkboxes and radioButtons functionality',()=>{
    it('TC-01 By using check',()=>{
        cy.get('input[value="red"]').check().should('be.checked')
        cy.get('input[type="checkbox"]').eq(1).check().should('be.checked')
        cy.get('input[value="red"]').uncheck().should('not.be.checked')    
    })
    it('TC-02 By using click',()=>{
        cy.get('input[value="red"]').click().should('be.checked')
        cy.get('input[type="checkbox"]').eq(1).click().should('be.checked')
        cy.get('input[value="red"]').click().should('not.be.checked')    
    })
    it('TC-03 By using click',()=>{
        cy.get('input[type="checkbox"]').each((el,i)=>{
            cy.wrap(el).check().should('be.checked')
        })   
    })
    it('TC-04 verify the functionality  to mutiple checkboxes ', function () {
        cy.get('input[type="checkbox"]').check(['red','yellow','blue','orange','green','purple'])
        cy.get('input[type="checkbox"]').uncheck(['red','yellow','blue','orange','green','purple'])
    })
    it('TC-05 verify the functionality for radio  with click()', function () {
        cy.get('[type="radio"]').eq(1).click().should('be.checked')
        cy.contains(' Internet Explorer').should('not.be.checked')
    })
    it('TC-06 verify the functionality for radio  with check()', function () {
        cy.get('[type="radio"]').eq(1).check().should('be.checked')
        cy.contains(' Internet Explorer').should('not.be.checked')
       
    })
    it('TC-07 verify the functionality for all the radio buttons', function () {
        cy.get('input[type="radio"]').each(function(el,index){
            cy.wrap(el).check().should('be.checked')
        })
    }) 
})   