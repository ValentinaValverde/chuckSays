'use strict';

const categoryListForm = document.getElementById('categoryListForm');

//shothand API: chaining .then!
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM Content Loaded");

    const chuckQuote = document.getElementById('chuckQuote');
    const apiUrl = 'https://api.chucknorris.io/jokes/random';
    get(apiUrl).then(function(response){
        console.log("RESPONSE:", response);
        showQuote(response.value, chuckQuote);
    })

    const categoriesUrl = 'https://api.chucknorris.io/jokes/categories';
    get(categoriesUrl).then(function(response){
        console.log("CATEGORIES:", response);
        generateCategoryList(response);
    })
});

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

categoryListForm.addEventListener('submit', function(){
    
})