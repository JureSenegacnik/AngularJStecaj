import * as angular from 'angular';
import 'angular-ui-router';
import {Controller2} from './app/Controller2';
//const myApp = angular.module('comtrade',[]).controller('Controller2', Controller2) ;

interface MainControllerStateParams extends ng.ui.IStateParamsService
{
    name: string;
}

class MainController 
{
    
    name: string;
    constructor($stateParams: MainControllerStateParams, $state: ng.ui.IStateService,
    private $q: ng.IQService, private $http: ng.IHttpService)
    {
        this.name = $stateParams.name;
        console.log($state.is('parameter'));
        console.log(this.name);
    }
    

}

const app = angular.module('app', ['ui.router']).controller('Controller2', Controller2) 
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) 
    {

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
            template: '<h1>Parameter state with a name parameter</h1><p>Name is : {{ vm.name }}</p><p>{{vm.data[name]}}</p>',
            controller: MainController,
            controllerAs: 'vm'
            
        });
    }]);