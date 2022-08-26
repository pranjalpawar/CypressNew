/// <reference types ="cypress"/>  

describe('verify the functionality of Checkbox,radio Button and Drop down', function () {
    beforeEach(function () {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    // drop down 
    it('verify the functionality for Drop Down', function () {
        // by text 
        cy.get('#dropdowm-menu-1').select('Python').should('have.value', 'python')

        // by value
        //cy.get('#dropdowm-menu-1').select('sql').should('contain','SQL')
        cy.get('#dropdowm-menu-1').select('sql').should('have.value', 'sql')
    })

    it('verify the functionality to select values from all drop down', function () {
        let selectValues = ["python", "testng", "javascript"]
        cy.get('.section-title').first().children().each(function (el, index) {
            cy.wrap(el).select(selectValues[index]).should('have.value', selectValues[index])

        })

    })
    // Enabled or Disable

    it.only('verify the functionality to check whether the element is enabled or disable', function () {
        cy.get('input[value="cabbage"]').should('be.disabled')
    })

    it.only('verify whether the drop down value is disabled', function () {
        cy.get('#fruit-selects').children()
            .filter('option[disabled="disabled"]')
            .should('have.text', 'Orange').and('be.disabled')
    })

})