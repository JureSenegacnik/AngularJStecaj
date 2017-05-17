export class MainController
{
    tasks: Task[] = [];
    showcomplete=true;
    foo: string="hello world";
    static $inject = [];
    constructor()
    {
        
    }
    fire()
        {
            alert('Fire');
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