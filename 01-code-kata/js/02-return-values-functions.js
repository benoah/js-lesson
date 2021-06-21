// Returning values from functions
// While function arguments are how we send variable values into functions,
// the return statement inside a function is how we send values back out.


//global scope 
function multiply(num1, num2){
    //local scope 
    const result = num1*num2;
    return result;
}
 //global scope 

 console.log("fn call", multiply(2, 3));

const calc = multiply(2, 3);

console.log (calc);



/*




















*/






// function calculateCommission(amount) {
    
//     const percentage = 40;
//     const commission = amount * (40 / 100);
    
//     return commission;
// }


// const commission = calculateCommission(200);

// console.log(commission);


// function multiply(number1, number2) {
    
//     const result = number1 * number2;
    
//     return result;
    
// }

// // // console.log(multiply(5, 10));

// // const result 

// const functionResult = multiply(10, 10);

// console.log(functionResult);