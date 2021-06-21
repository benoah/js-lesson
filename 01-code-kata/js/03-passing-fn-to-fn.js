//Passing functions into other functions
//It is very common in JavaScript to pass functions as arguments to other functions.
//These are often called callback functions are executed within the receiving function.







// global scope 
function logArgument(someArg){
    // local scoope 
    console.log("this argument is a: ", typeof someArg);

    // to check some arg is  equel to a function
    if (typeof someArg === 'function'){
        someArg (2, 3);
    }else {
        console.log ("not found");
    }

}

const obj = [];
const arr = [];
const str = "hi";
const num = 100;



const add = function(a,b){
    console.log(a+b);
    return a + b;
}

logArgument(obj);