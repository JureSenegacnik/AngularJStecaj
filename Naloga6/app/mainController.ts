import {IDirective} from 'angular';

export class TestDirective implements IDirective
{

    restrict = 'EA';

    //template = '<h1>Hello world!</h1>';

    templateUrl = 'test.html';

    scope = {
        name: '=name',
        surname: '@surname'
    };

    controller= 'DirectiveController';
    controllerAs = '$ctrl';

    bindToController  = true;
    
    constructor(private $q: ng.IQService)
    {

    }

    link(scope: ng.IScope, element: JQuery, attributes: ng.IAttributes){

        //element.hide();
    }

    static factory(): ng.IDirectiveFactory
    {
        const directive = ($q: ng.IQService) => new TestDirective($q);

        directive.$inject = ['$q'];
        return directive;
    }
    ali(tekst:string){
        if (tekst.length > 10)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

export class DirectiveController
{
    data = 'Data from DirectiveController';
    tekst='';
    static $inject = ['$q','$scope'];
    constructor(private $q: ng.IQService, private $scope:ng.IScope){
        console.log($scope);
    }
}


/*1. Count the number of characters inside of values
 Color red if less then 100 and green if more than 100
 
 2.Have a scoring board for basketball team
 Trije gumbi za vsako ekipo: da da eno dve ali tri točke*/
 export class BasketballDirective implements IDirective
{

    restrict = 'EA';

    //template = '<h1>Hello world!</h1>';
    //team='';
    templateUrl = 'results.html';

    /*scope = {
        name: '=name',
        surname: '@surname'
    };*/
    scope = {
        team: '=name',

        //surname: '@surname'
    };

    controller= 'BasketballDirectiveController';
    //controllerAs = '$ctrl2';
    controllerAs = 'team';
    bindToController  = true;
    
    constructor(private $q: ng.IQService)
    {
        
    }

    link(scope: ng.IScope, element: JQuery, attributes: ng.IAttributes){

        //element.hide();
    }

    static factory(): ng.IDirectiveFactory
    {
        const directive = ($q: ng.IQService) => new BasketballDirective($q);

        directive.$inject = ['$q'];
        return directive;
    }
    
}

export class BasketballDirectiveController
{
    title1 = 'Data from BasketballDirectiveController';
    tekst='';
    scoresum=0;
    static $inject = ['$q','$scope'];
    constructor(private $q: ng.IQService, private $scope:ng.IScope){
        console.log($scope);
    }
    add(points:number)
    {
        //console.log(points);
        this.scoresum+=points;
        console.log(this.scoresum);
    }
}
