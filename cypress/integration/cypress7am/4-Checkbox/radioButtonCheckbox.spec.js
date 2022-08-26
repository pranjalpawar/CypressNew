/// <reference types ="cypress"/>  
describe('verify the functionality of Checkbox,radio Button and Drop down',function(){
     beforeEach(function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
     })

    it('verify the functionality for Checkbox',function(){
        cy.get('input[value="option-3"]').should('be.checked')

    })
//   with click
    it('verify the functionality for Checkbox with click',function(){
        cy.get('input[value="option-1"]').click().should('be.checked')
        cy.get('input[value="option-1"]').click().should('not.be.checked')

    })
//   with check and uncheck function()
    it('verify the functionality for Checkbox with check() and uncheck() ',function(){
        cy.get('input[value="option-2"]').check().should('be.checked')
        cy.get('input[value="option-2"]').uncheck().should('not.be.checked')

    })

    it('verify the functionality to multiple checkboxes',function(){
        cy.get('#checkboxes').find('input[type="checkbox"]').each(function(el){
             
            cy.wrap(el).check().should('be.checked')
            cy.wrap(el).uncheck().should('not.be.checked')
        })
       
    })

    it('verify the functionality to multiple checkboxes',function(){
        cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4'])
        cy.get('input[type="checkbox"]').uncheck(['option-1','option-2','option-3','option-4'])

       })
//       radio button with click()
       it('verify the functionality for Radio Button with click()',function(){
        cy.get('input[value="green"]').click().should('be.checked')
        cy.get('input[value="orange"]').should('not.be.checked')
    
    })
//     radio button with check()
    it('verify the functionality for Radio Button with check()',function(){
        cy.get('input[value="green"]').check().should('be.checked')
        cy.get('input[value="orange"]').should('not.be.checked')
    
    })
//   all radio button 
    it('verify the functionality for all Radio Buttons',function(){
       cy.get('#radio-buttons').find('input').each(function(el){
        cy.wrap(el).check().should('be.checked')
       })
       cy.get('#radio-buttons').first().should('not.be.checked')
    })
})