// this is the api calls endpoint 
const url = "https://cat-fact.herokuapp.com/facts";
// this line just chose wehere to put the element 
const resultsContainer = document.querySelector(".results");


async function getCat() {
    const response = await fetch(url);

    const results = await response.json();

    const facts = results.all; 


    resultsContainer.innerHTML = "";


    for (let i = 0; i < facts.length; i++) {
        console.log(facts[i].text);

        // to not download everything but just some of the  a amout of the stuff from the api 
        if (i === 10) {
            break;
        }


        resultsContainer.innerHTML += `
       <div class="result"> 
       ${facts[i].text}
       </div>
       `
    }

}
getCat();