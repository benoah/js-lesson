// Function arguments are a very important concept in JavaScript
// and are how we pass values into functions.


function printMessage(...args){

    console.log(typeof args, args);
    // rest operator array (object) holding all my params passing in by 
    const name= args[0];
    const surname= args[1];
    const age =args[2];
    const jobba =args[3];
    const home =args[4];



    const fullName = `${name} ${surname}, I live in ${home} and work ${jobba}, and my age ${age}`;
   // let fullName = `  ${param1} ${param2} ` ;
   // console.log("hello there", param1);
    console.log("hello again", fullName);
}

printMessage("ben", "moussa", 43, "student", "oslo" );