export class MainController {

    people = [{gender: 'Male'}, {gender: 'Female'}];


    strings = ['aa', 'bb', 'cc'];

    static $inject = [];

    constructor() {

    }
    onChange(data: any)
    {
        console.log(data);
    }
}