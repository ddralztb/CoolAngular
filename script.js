class MyClass {
    
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    printMessages(){
        console.log(`Hello ${this.name}, you're ${this.age}`);
    }

}

let myVar = new MyClass('Jamie', 30);
myVar.printMessages();