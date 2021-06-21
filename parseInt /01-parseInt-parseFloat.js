// converting string to numbers 

// we can use parseInt to convert a string holding an integer value to a number and parseFloat 
// to convert a string holding a number with decimal place in it. 



//const number = 3 + "3";

const number = '100'

const parsed = 3 + parseInt (number);


const dollars = "10.06";
const parsedMoney = 10 + parseFloat(dollars);

const paddingWidth = "30.06em";
const addTen = 10 + parseInt (paddingWidth);


console.log(addTen);

//console.log(parsedMoney);
