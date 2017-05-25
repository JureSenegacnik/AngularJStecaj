import * as angular from 'angular';
import {SecondController, DataService,MainController} from './app/mainController';
const myApp = angular.module('comtrade',[])
    .controller('MainController',MainController)
    .controller('SecondController', SecondController)
.service('DataService', DataService); 




/*mihec.susnik@gmail.com*/ 

