function getPerson(obj){
    try{
        if(obj.age==0 || isNaN(obj.age) || obj.name==null){
            throw new Error("Invalid parameter type");
        }
        return `Name : ${obj.name}, Age: ${obj.age}`
    }
    catch(error){
        return error.message;
    }
}

console.log(getPerson({name:"aditya"}));
console.log(getPerson({age:22}));
console.log(getPerson({name:"aditya",age:20}));
console.log(getPerson(["name","Aditya"]));