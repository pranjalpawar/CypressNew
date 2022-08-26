/// <reference types ="cypress"/>  

// unit testing ===> class and function (componant testing)
// intergration testing ===> one class to unother class data flow test (api)
// end to end testing ===> user behaviour 

describe('verify the functionality of api',function(){

    it('verify the count of users via API',function(){
        
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then(function({headers,status,duration,body}){
                //cy.log(body)
                //cy.log(headers)
                //cy.log(status)
                //cy.log(duration)
                expect(status).to.eql(200)
                expect(duration).to.be.within(15,200)
                expect(body).to.have.keys(["data","page","per_page","support","total","total_pages"])
                body.data.forEach(element =>{
                //    expect(element).to.have.keys(['avatar', 'email', 'first_name', 'id', 'last_name'])

                expect(element.first_name).not.to.eql(null)
                expect(element.last_name).not.to.eql(null)
                expect(element.email).not.to.eql(null)
                expect(element.id).not.to.eql(null)
                expect(element.avatar).not.to.eql(null)
                })

                expect(headers).to.have.property('content-type','application/json; charset=utf-8')

        })
    })
    
})