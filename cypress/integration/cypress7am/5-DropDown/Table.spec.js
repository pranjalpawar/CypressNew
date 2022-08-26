/// <reference types ="cypress"/>  

describe('verify the table', function () {
    it('verify the addition value for the table', function () {

        let sum = 0

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').find('tr').each(function (row, index) {
            if (index != 0) {
                //  cy.log(row.children().last().text())

                sum = sum + Number(row.children().last().text())
            }
        }).then(function () {
            expect(sum).to.eql(159)
        })
        // cy.log(sum)
    })

})