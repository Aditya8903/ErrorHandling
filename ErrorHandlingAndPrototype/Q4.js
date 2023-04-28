class Employee{
    constructor(name,position,salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary(){
        return this.salary;
    }
}

const employee1 = new Employee("Aditya","Manager",80000);
const employee2 = new Employee("Mohit","Analyst",40000);
console.log(employee1.getSalary());
console.log(employee2.getSalary());