/*prototype 
function Student(name,age){
    this.name = name;
    this.age = age;
}

Student.prototype.state = "Jharkhand";

Student.prototype.ageFactor = function(){
    return this.name + " " + this.age;
}
const st1 = new Student("Aditya",20);
const st2 = new Student("dhitya",19);

console.log(st1.state);
console.log(st2.ageFactor());
*/
function Student(name,age){
    this.name = name;
    this.age = age;
}

Student.prototype.printDetails  = function(){
    console.log(`Hello, the student is ${this.name}`);
}
const student1 = new Student("Aditya",20);
const student2 = new Student("dhitya",19);
student1.printDetails();
student2.printDetails();