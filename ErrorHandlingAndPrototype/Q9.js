function numberChecker(arr){
    return function(num){
        return arr.includes(num);
    }
}

const checkNumbers = numberChecker([1, 2, 3, 4, 5]);
console.log(checkNumbers(3)); 
console.log(checkNumbers(6)); 