export class TestController
{
    success: boolean = false;
    data: any;
    table=['a'];
    static $inject = ['$http'];
    constructor(private $http: angular.IHttpService)
    {
        this.$http = $http;
        
    }

    makeRequest()
    {
        this.$http.get('api/v1/data').then((success)=>{
            this.data = success.data;
            this.success = true;
        });
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