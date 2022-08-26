/// <reference types ="cypress"/>  

describe('hooks in cypress',function(){
   
    before(function(){
        cy.log(' i will run before everthing ')
    })

    beforeEach(function(){
        cy.log('i will run before each testcase')
    })

    afterEach(function(){
        cy.log('this will run after each testcase')
    })

    after(function(){
        cy.log('this will run after all testcase')
    })

    it('testcase one name',function(){
        cy.log('testcase one execution')
    })

    it('testcase two name',function(){
        cy.log('testcase two execution')
    })

    it('testcase three name',function(){
        cy.log('testcase three execution')
    })
})