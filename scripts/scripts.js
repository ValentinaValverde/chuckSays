'use strict';

const categoryListForm = document.getElementById('categoryListForm');

//shothand API: chaining .then!
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM Content Loaded");

    const apiUrl = 'https://api.chucknorris.io/jokes/random';
    generateQuote(apiUrl);

    const categoriesUrl = 'https://api.chucknorris.io/jokes/categories';
    get(categoriesUrl).then(function(response){
        console.log("CATEGORIES:", response);
        generateCategoryList(response);
    })

    categoryListForm.addEventListener('submit', function(event){
        event.preventDefault();
        const newCategory = this.querySelector('select').value;
        console.log(newCategory);
        const apiUrl = `https://api.chucknorris.io/jokes/random?category=${newCategory}`;
        //string template literals: using `backticks` with the $ and {}, it will automatically interpolate
        console.log(apiUrl); //demo to see the new url after selecting a new category
        generateQuote(apiUrl);

    });
});


function generateQuote(apiUrl){
    get(apiUrl).then(function(response){
        const chuckQuote = document.getElementById('chuckQuote');
        console.log("RESPONSE:", response);
        showQuote(response.value, chuckQuote);
    });
}


function showQuote(quote, element) {
    console.log("QUOTE:", quote);
    element.innerText = quote;
};

function generateCategoryList(categoryArray){
    console.log(categoryArray);
    const selectElement = document.createElement('select');
    categoryArray.map(function (category){
        //create option element
        const option = document.createElement('option');
        //define option atributes
        option.value - category;
        option.text = category;
        //append option to <select>
        selectElement.appendChild(option);
    });
    //append the <select> to <form>
    categoryListForm.append(selectElement);
};



///update categroy responses: mission: write an array filter method to only return the categories you want (ex: removing the explicit category, or the fashio one, etc.)