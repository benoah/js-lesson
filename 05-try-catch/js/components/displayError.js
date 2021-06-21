function displayError(message){

    if(!message){
        message = "unknown error"
    }



    return `<div class= "error">${message} </div>  `
}