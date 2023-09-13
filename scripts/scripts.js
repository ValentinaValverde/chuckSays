'use strict';


//longhand: API Practice
document.addEventListener('DOMContentLoaded', function(){
    console.log("DOM Content Loaded");

    const chuckQuote = document.getElementById('chuckQuote');

    const fetchQuote = fetch('https://api.chucknorris.io/jokes/random?category=dev');
    const quoteResponse = fetchQuote.then(function(response){
        console.log("RESPONSE:", response);
        return response.json();
    });
    const jsonResponse = quoteResponse.then(function(data){
        console.log("DATA:", data);
        showQuote(data.value, chuckQuote);
        return data;
    });
    console.log("JSON:", jsonResponse);
});

function showQuote(quote, element){
    console.log("QUOTE:", quote);
    element.innerText = quote;
};


//shothand API: chaining .then!
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM Content Loaded");

    const chuckQuote = document.getElementById('chuckQuote');

    fetch('https://api.chucknorris.io/jokes/random')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            showQuote(data.value, chuckQuote);
            return data;
        });
});

function showQuote(quote, element) {
    console.log("QUOTE:", quote);
    element.innerText = quote;
};