const fruit =["bananas", "oranges", "pears", "kiwi"];

console.log(typeof fruit, fruit)

for (let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
    if (fruit[i] === "oranges") break;
}



fruit.forEach(function(item, index){
    console.log("i have some", item, index);
})