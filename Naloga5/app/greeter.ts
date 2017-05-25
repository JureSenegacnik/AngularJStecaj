export class Greeter {
    constructor(private name: string) {
    }

    getGreeting(): string {
        return "Hello " + this.name + "!";
    }
}