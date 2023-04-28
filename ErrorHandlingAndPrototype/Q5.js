class Person{
    constructor(name = "Unknown", age = 0){
        this.name = name;
        this.age = age;
    }
    // Multiple constructor not allowed
    /*constructor(){
        this.name = "Unknown";
        this.age = 0;
    }*/

    getDetails(){
        return `Name : ${this.name}, Age: ${this.age}`;
    }
}

const person1 = new Person("Aditya",20);
const person2 = new Person();
console.log(person1.getDetails());
console.log(person2.getDetails());