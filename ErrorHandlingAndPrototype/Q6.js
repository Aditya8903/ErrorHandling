class Calculator{
    // static method don't need instatiation
    static add(num1,num2){
        return num1+num2;
    }
}
const result = Calculator.add(10,5);
console.log(result);