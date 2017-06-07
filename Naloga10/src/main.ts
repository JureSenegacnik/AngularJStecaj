import * as angular from 'angular';
import 'angular-ui-router';
import {TestController} from './tests/TestController';
//import { DataService,Controller2} from './app/Controller2';
interface MainControllerStateParams extends ng.ui.IStateParamsService
{
    name: string;
}

class MainController
{
    table=['a'];
    name: string;
    constructor($stateParams: MainControllerStateParams, $state: ng.ui.IStateService)
    {
        this.name = $stateParams.name;
        console.log($state.is('parameter'));
        //this.fizzbuzz();
    }
    fizzbuzz(vnos){
        let table2=[];
        let i:number;
        for (i=1; i <= Number(vnos); i++)
        {
            //table2.push(i);
            if (i%3 === 0 && i%5===0) table2.push("fizzbuzz");
            else if (i%3 === 0) table2.push("fizz");
            else if (i%5 === 0) table2.push("buzz");
            else table2.push(i);
        }
        return table2;
    }
    fizzy(vnos){
        this.table=this.fizzbuzz(vnos);
    }
}

const app = angular.module('app', ['ui.router']).controller('MainController',MainController) 
.controller('TestController',TestController)
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {

        //  If a user goes to an url that doesn't have a valid state assigned
        $urlRouterProvider.otherwise('/error');

        $stateProvider.state('home',
            {
                url: '/',
                template: '<h1>Homepage</h1>'
            });

        $stateProvider.state('login',
            {
                url: '/login',
                template: '<h1>Login</h1>'
            });

        $stateProvider.state('error',
            {
                url: '/error',
                template: '<h1>Error 404</h1>'
            });

        $stateProvider.state('parent',
            {
                url: '/parent',
                template: '<h1>Parent state <span class="text-muted"><small>Has an additional ui-view.</small></span></h1><ui-view></ui-view>'
            });

        $stateProvider.state('parent.child',
            {
                url: '/child',
                template: '<div class="well"><h4>Child state</h4></div>'
            });

        $stateProvider.state('parameter', {
            url: '/parameter/:name',
            template: '<h1>Parameter state with a name parameter</h1><p>Name is : {{ vm.name }}</p>',
            controller: MainController,
            controllerAs: 'vm'
        });
    }]);