describe("ourFirstTest", function () {

    it ('can be created',()=> {
        let foo= new Foo();
        expect(foo).toBeDefined();
    });
    //  Check if our class can be created
    it("is not undefined", () => {
        let foo = new Foo();
        expect(foo).toBeDefined();
    });

    it("returns Hello world!", () => {
        let foo = new Foo();
        expect(foo.getBar()).toEqual("bar");
    });

    //  A simple unit test
    it("sums two numbers", () => {
        let foo = new Foo();

        expect(foo.sum(5, 5)).toEqual(10);
        expect(foo.sum(5, -5)).toEqual(0);
        expect(foo.sum(0, -5)).toEqual(-5);
    });
});

class Foo {

    constructor(){

    }
    getBar(): string {
        return "bar";
    }

    sum(a: number, b: number): number
    {
        return a + b;
    }
}