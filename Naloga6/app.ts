import * as angular from 'angular';
import {TestDirective, DirectiveController,BasketballDirective,BasketballDirectiveController} from './app/mainController';

const myApp = angular.module('comtrade', [])
.directive("testDirective", TestDirective.factory())
.controller("DirectiveController", DirectiveController)
.directive("basketballDirective", BasketballDirective.factory())
.controller("BasketballDirectiveController", BasketballDirectiveController);


/*mihec.susnik@gmail.com*/ 

