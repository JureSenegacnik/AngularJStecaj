export class Controller2 {
    data = '';
    timeslots = 'none';
    static $inject = ['$q', '$http'];

    

    constructor(private $q: ng.IQService, private $http: ng.IHttpService) {

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
    view(selectedCar)
    {
        console.log(selectedCar);
    }
}
