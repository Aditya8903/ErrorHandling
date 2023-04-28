class Car{
    constructor(name,model,year){
        this.model = model;
        this.name = name;
        this.year = year;
    }
    getDescription(){
        return `This is a ${this.year} ${this.name} ${this.model}`;
    }
}

const myCar = new Car("Skoda","Rapid",2022);
console.log(myCar.getDescription());