import IScope = angular.IScope;


export class SecondController
{

    foo = 'Fresh from SecondController';


    static $inject = ['DataService', '$rootScope','$q', '$http','$scope'];
    constructor(public dataService: DataService, private $rootScope: ng.IRootScopeService){
        this.dataService = dataService;
        this.$rootScope = $rootScope;
    }


    fire()
    {
        this.$rootScope.$broadcast('event.fire', 'Hello');

    }
    add(name: string)
    {
        this.dataService.add(name);
    }
    add2(name:string)
    {
        let addrequest = this.dataService.addWithTimeout(name);
        addrequest.then((success: string) => {
            console.log("Success add");
        }, (error: string) => {
            console.log( "Error adding");
        })
        this.$rootScope.$applyAsync();

    }
    removeCompleted()
    {
        this.dataService.removeCompleted();
    }
    removeCompleted2(){
        let removerequest = this.dataService.removeCompletedWithTimeout();
        console.log("removing");
     

 
        removerequest.then((success: string) => {
            console.log("Success remove");
  
            //this.$rootScope.$applyAsync();
        }, (error: string) => {

            console.log( "Error removing");
        });

    }
    
}



export class DataService
{
    public bar = 'Hello from DataService';
    static $inject = ['$q', '$http' ];

    public tasks=[];
    constructor(private $q: ng.IQService, private $http: ng.IHttpService)
    {

    }
    add (name:string)
    {

        this.tasks.push(new Task( name, false));

        console.log(name);
    }
    addWithTimeout (name:string): ng.IPromise<string>
    {
        let defera = this.$q.defer();
        setTimeout(() =>{
            this.tasks.push(new Task( name, false));

            console.log("added wtih timeout:" + name);
            defera.resolve('Success');
        }, 1000); 
        return defera.promise;
    }

    removeCompleted()
    { 
        for (let index in this.tasks)
        {
            if (this.tasks[index].completion === true)
            {
                /*alert(index);*/
                /*let indexx = this.tasks.indexOf(index);*/
                this.tasks.splice(Number(index), 1);  
                console.log("removed") ;  
            }
        }
    }
    
    removeCompletedWithTimeout(): ng.IPromise<string> {
        let defer = this.$q.defer();

        //alert(this.tasks);
        setTimeout(() =>{
            //  async

            for (let index in this.tasks)
            {
                if (this.tasks[index].completion === true)
                {
                    /*alert(index);*/
                    /*let indexx = this.tasks.indexOf(index);*/
                    this.tasks.splice(Number(index), 1);  
                    console.log("removed with timeout") ;  
                }
            }
            defer.resolve('Success');
        }, 1000);

        return defer.promise;
    }
}

export class MainController
{
    tasks: Task[] = [];
    showcomplete=true;
    foo: string="hello world";
    static $inject = ['DataService', '$rootScope'];
    constructor(public dataService: DataService, private $rootScope: ng.IRootScopeService){
        this.dataService = dataService;
        this.$rootScope = $rootScope;
    }
    fire()
    {
        this.$rootScope.$broadcast('event.fire', 'Hello');
    }

    add (name:string)
    {
        this.tasks.push(new Task( name, false));
    }
    /*remove (num:number)*/
    removecompleted()
    { 
        for (let index in this.tasks)
        {
            if (this.tasks[index].completion === true)
            {
                /*alert(index);*/
                /*let indexx = this.tasks.indexOf(index);*/
                this.tasks.splice(Number(index), 1);     
            }
        }
    }
}

class Task{
    constructor(public name, public completion){
        this.name=name;
    }
}
/*odstranjevanje, že narejen prečrtan, filter, da pokaže samo narejene*/