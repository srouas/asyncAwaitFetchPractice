console.log("It's Kanye time...");

// in the below function, async takes it out of the call stack to work in the background, then we use await fetch so that the function doesn't run until it fetches the info from the api, then we store that info in response variable, which we then convert into an object with json, which we then store in another variable called data, which we then access the quote through dot notation and store the quote that's been selected in another variable, which we then set the h1 of the page to change to that text. 

async function getQuote(){
let response = await fetch("https://api.kanye.rest/")
let data = await response.json()
let quote = data.quote
let header = document.querySelector("#kanye-quote")

header.innerText = quote}

getQuote()

let newQuote = document.querySelector("#new-quote-button")

// the below event listener listens for when the button is clicked, to action the above function - which ultimately fetches a quote from the api and then sets the h1 of the page to that quote.
newQuote.addEventListener("click", getQuote)
