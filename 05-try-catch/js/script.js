// this is the api calls endpoint 
const url = "https://cat-fact.herokuapp.com/factss";
// this line just chose wehere to put the element 
 const resultsContainer = document.querySelector(".results");


async function getCat(){

    try{
        const response = await fetch(url);

        const results = await response.json();
    
        const facts = results.all;
    
    
        resultsContainer.innerHTML = "";
    
    
        for (let i = 0; i < facts.length; i++){
           console.log( facts[i].text) ;
    
    // to not download everything but just a amout of the stuff from the api 
    if (i === 10){
        break;
    }
    
    
    
           resultsContainer.innerHTML += `
           <div class="result"> 
           ${facts[i].text}
           </div>
           `
        }


    }
    catch(error){
        console.log("An error occured");
        resultsContainer.innerHTML = displayError ("oh no its not working ");

    }
    

    
}
getCat();