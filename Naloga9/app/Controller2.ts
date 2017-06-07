import IScope = angular.IScope;
export class Controller2 {
    data = '';
    timeslots = 'none';
    static $inject = ['DataService','$q', '$http'];

    

    constructor(public dataService: DataService, private $q: ng.IQService, private $http: ng.IHttpService) {
        this.dataService = dataService;
    }

    getHttp() {
        this.$http.get('http://smartninja.betoo.si/api/CMW/cars')
            .then((success: any) => {
                    this.data = success.data;
                }, (error: any) => {
                    console.log(error);
                }
            );
        this.$http.get('http://smartninja.betoo.si/api/CMW/timeslots')
            .then((success: any) => {
                    this.timeslots = success.data;
                }, (error: any) => {
                    console.log(error);
                }
            );
    }
    postHttp(selectedRental, mail){ 
        
        
        
        
        let postObject = {
            email: mail,
            timeslotId: selectedRental
        };


        //alert(postObject);
        //alert(mail);
        //this.timeslots[selectedRental].contactEmail;
        this.$http.post('http://smartninja.betoo.si/api/CMW/reservations', postObject)
            .then((success: any) => {
                    console.log(success);
                }, (error: any) => {
                    console.log(error);
                }
            );


    }
    view(selectedCar )
    {
        //console.log(selectedCar);
        //this.dataService.show(this.data, selectedCar);
        //console.log('foo');
        //console.log(this.data[selectedCar]);
        this.dataService.show(this.data, selectedCar);
        
    }
}

export class DataService
{
    public bar = [];//'Hello from DataService';
    static $inject = ['$q', '$http','$rootScope' ];
    
    public tasks='';
    constructor(private $q: ng.IQService, private $http: ng.IHttpService,private $rootScope: ng.IRootScopeService)
    {
        this.$rootScope = $rootScope;
        this.$rootScope.bar=[];"Nothing Yet";
    }
    show (data, name:string)
    {

        this.$rootScope.bar=data[Number(name)-1];
        console.log(data[Number(name)-1]);
}
}