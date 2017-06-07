import * as angular from 'angular';
import 'angular-mocks';

import {TestController} from "./TestController";

describe("controllerTest", () => {

    //  Create a mocked module (can also create mocked dependencies)
    beforeEach(angular.mock.module('app'));

    let $httpBackend, $http, $rootScope;

    beforeEach(() => {
        angular.mock.inject(($rootScope,
                             $injector) => {
            this.$rootScope=$rootScope;
            //  Used to mock HTTP requests/responses
            this.httpBackend = $injector.get('$httpBackend');

            //  Used to create our controller
            this.$http = $injector.get('$http');
        });
    });

    it("is defined", () => {
        //  Pass in the injected $http service
        let controller = new TestController(this.$http);
        expect(controller).toBeDefined();
    });
/*
    /*it("makes a HTTP request", () => {

        //  Mock response
        this.httpBackend.when('GET', 'api/v1/data')
            .respond(200, {
                status: "success"
            });

        let controller = new TestController(this.$http);

        //  Test before request
        expect(controller.success).toBe(false);
        expect(controller.data).toBeUndefined();

        //  Make request
        controller.makeRequest();//fire promise

        //  Trigger responses
        this.httpBackend.flush(); //force promises
        //this.$rootScope.apply(); alternativa prejšnji komandi
        
        //  Test after request
        expect(controller.success).toBe(true);
        expect(controller.data).toBeDefined();
        expect(controller.data['status']).toBe("success");
    });
*/
    it ("right length of fizzbuzz",()=>{
        let controller=new TestController(this.$http);
        expect(controller.fizzbuzz(10).length).toBe(10);
        expect(controller.fizzbuzz(10)).toBeDefined();
        
        });
    
    it ("basic check if some of numbers are not in the output",()=>{
        let controller=new TestController(this.$http);
        expect(controller.fizzbuzz(200)).not.toContain(3);
        expect(controller.fizzbuzz(200)).not.toContain(5);
        expect(controller.fizzbuzz(200)).not.toContain(18);
        expect(controller.fizzbuzz(200)).not.toContain(21);
        expect(controller.fizzbuzz(200)).not.toContain(25);
} );
    it ("corect output",()=>{
            let controller=new TestController(this.$http);
            let testrange=1200;
            for (let i=0;i<testrange;i++)
            {
                if (((i+1)%3===0)&&((i+1)%5===0)) expect(controller.fizzbuzz(testrange)[i]).toBe("fizzbuzz");
                else if (((i+1)%3===0)) expect(controller.fizzbuzz(testrange)[i]).toBe("fizz");
                else if (((i+1)%5===0)) expect(controller.fizzbuzz(testrange)[i]).toBe("buzz");
                else expect(controller.fizzbuzz(testrange)[i]).toBe(i+1);
                //console.log(i+1,controller.fizzbuzz(testrange)[i])
            }
            //expect(controller.fizzbuzz(200)).not.toContain(5);
        // expect(controller.fizzbuzz(200)).not.toContain(18);
            //expect(controller.fizzbuzz(200)).not.toContain(21);
            //expect(controller.fizzbuzz(200)).not.toContain(25);
            
    } );
} );