function calculator(number1, number2, operator) {
    let result;
    if(operator === '+' && operator === '-' && operator === '*' && operator === '/'){
        if (operator == '+') {
            result = number1 + number2;
        } else if (operator == '-') {
            result = number1 - number2;
        } else if (operator == '*') {
            result = number1 * number2;
        } else if (operator == '/') {
            result = number1 / number2;
        }
    }else {
        try{
            throw new RangeError("The operator must be +,-,*,/");
        }catch (e){
            return e.message;
        }
    }
    return result;
}


console.log(calculator(3, 9, '%'));