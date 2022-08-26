/// <reference types ="cypress"/>  

describe('verify the basic GET, PUT , POST , DELETE API',function(){



    it('verify the GET api',function(){

          cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
          }).then(function(res){
            cy.log(res)
            expect(res.status).to.eql(200)
          })

    })

    it('verify the POST api',function(){

         cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                "name": "morpheus",
                "job": "leader"
            }
         }).then(function(res){
            cy.log(res)
            expect(res.status).to.eql(201)
         })

    })

    it('verify the PUT api',function(){

         cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: {
                "name": "morpheus",
                "job": "zion resident"
            }
         }).then(function(res){
            cy.log(res)
            expect(res.status).to.eql(200)
         })

    })

    it.only('verify the DELETE api',function(){

         cy.request({
            method: "DELETE",
            url: "https://reqres.in/api/users/2"
         }).then(function(res){
            cy.log(res)
            expect(res.status).to.eql(204)
         })

    })

})
