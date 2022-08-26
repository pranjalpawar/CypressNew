/// <reference types ="cypress"/>  

// find()
it('To get descendant DOM elements of the selector, use the .find() command.',function(){
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('.traversal-job-list').find('.menu').find('.sales').should('have.text','Sales')
})

// closest()
it('To get the closest ancestor DOM element, use the .closest() command.',function(){
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('.sales').closest('div').should('have.class','thumbnail')
})

// filter()
it('To get DOM elements that match a specific selector, use the .filter() command.',function(){
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('.traversal-breadcrumb').children().filter('.active').should('have.text','Contact Us')
})

// not() 
it('To remove DOM element(s) from the set of elements, use the .not() command.',function(){
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
   cy.get('div[data-toggle="buttons"]').children('button').not('.active').should('have.length',3)
})

// parents()
it('To get parents DOM element of elements, use the .parents() command.',function(){
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
   cy.get('#veggie').parents().filter('.container').should('have.length',1)

})


// parent()
it('To get parent DOM element of elements, use the .parent() command.',function(){
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('#fruits').parent().should('have.class','traversal-food-list')
})

// parentsUntil()
it.only('To get parents DOM element of elements until other element, use the .parentsUntil() command.',function(){
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('#fruits').parentsUntil('.col-sm-12').should('have.length',2)
})