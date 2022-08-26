///<reference types="cypress" />

describe('To learn traverse methods',()=>{
    it('TC-01 .children() method',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('.menu.list-unstyled').children().should('have.length',11)
    })
    it.only('TC-02 .first() method',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('.menu.list-unstyled').children().first().should('contain','')
        cy.get('.menu.list-unstyled').children().first().should('be.visible')
        cy.get('.menu.list-unstyled').children().first().should('exist')
      
    })
    it('TC-03 .last() method',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('.menu.list-unstyled').children().last().should('have.attr','class','menu-item-has-children')

        
    })
    it('TC-04 .eq() method',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('.menu.list-unstyled').children().eq(3).should('contain','Tailorm')
    })
    it.only('TC-05 .find() method',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('.menu.list-unstyled').children().find('a').each((el,i)=>{
            //.click,.type()----cy.wrap(el)
            let text=el.text()
            cy.log(text)
        })
    }) 
    it('TC-06 .next() method',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('.menu.list-unstyled').children().first().next().should('contain','Speciality')
      
    })
    it('TC-07 .prev() method',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('.menu.list-unstyled').children().last().prev().should('contain','About Us')
        
    })  
    it('TC-08 .prevAll() method',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('.menu.list-unstyled').children().eq(2).prevAll().should('have.length',2)
        
    })
    it('TC-09 .nextAll() method',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('.menu.list-unstyled').children().first().nextAll().should('have.length',10)
        
    })
    it('TC-10 .closest() method',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('.menu.list-unstyled').closest('nav').should('have.attr','id','main-menu')
        cy.get('div[class="topnav__top"]').closest('header').should('have.attr','id','header')
    })

})
