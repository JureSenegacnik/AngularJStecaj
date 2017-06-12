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
        this.dataService.show(this.data, selectedCar);
        
    }
}

export class DataService
{
  
    static $inject = ['$q', '$http', ];
    public currentcar=[];
    public tasks='';
    constructor(private $q: ng.IQService, private $http: ng.IHttpService,)
    {
        this.currentcar=['no car selecte yet'];
    }
    show (data, name:string)
    {
        this.currentcar=data[Number(name)-1];
        console.log(data[Number(name)-1]);
}
}