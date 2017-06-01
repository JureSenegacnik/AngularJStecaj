import * as angular from 'angular';
import 'angular-ui-bootstrap';
const app= angular.module('app',['ui.bootstrap']);

class Car
{
    constructor(public name:string)
    {
        console.log(name);
    }
}

let car = new Car('BMW');
console.log(car);