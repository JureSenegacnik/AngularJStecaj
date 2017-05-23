export class MainController {
    data = '';
    timeslots = 'none';
    static $inject = ['$q', '$http'];
    reservation=[];
    

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
        
        /*alert(selectedRental);
        alert(mail);
         this.reservation = [
        {
            "timeslotId": "selectedRental",
             "email":"this.timeslots.selectedRental.contactEmail" 
        }];*/
        
        this.reservation.push({'timeslotId': selectedRental});
        this.reservation.push({'email': mail});
        
        let  parameter = JSON.stringify(this.reservation);
        alert(parameter);
        //alert(mail);
        //this.timeslots[selectedRental].contactEmail;
        this.$http.post('http://smartninja.betoo.si/api/CMW/reservations', this.reservation)
            .then((success: any) => {
                    console.log(success);
                }, (error: any) => {
                    console.log(error);
                }
            );


    }
 
    fire() {
        let initialHttpRequest = this.getDummyPromise();

        this.data = "Firing";

        //  Chaining promises
        initialHttpRequest.then((success: string) => {

        //    this.data = success ;
            return this.getDummyPromise();
        }, (error: string) => {

            return "Modified error";
        }).then((success2: string) => {

            this.data = "2. then: success (" + success2 + ')';

        }, (error2: string) => {

            this.data = "2. then: error (" + error2 + ')';
        });


    }


    getDummyPromise(): ng.IPromise<string> {
        let defer = this.$q.defer();

        setTimeout(function () {
            //  async
            let random = Math.round(Math.random());

            if (random) {
                //  success
                defer.resolve('Success');
            }
            else {
                //  error
                defer.reject('Error');
            }

        }, 1000);

        return defer.promise;
}
}