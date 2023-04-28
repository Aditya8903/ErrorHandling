function convertToNumber(str){
    let num = Number(str);//convert value to number type if not possible:return isNaN
    // try->contains code which can cause error:
    try{
        if(isNaN(num)){
            throw new Error("Invalid number")
        }return num;
    }catch(error){
        return error.message;
    }
}

console.log(convertToNumber("123"));
console.log(convertToNumber("aditya"));