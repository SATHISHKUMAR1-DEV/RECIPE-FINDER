// script.js
document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    searchRecipes(query);
});

function searchRecipes(query) {
    // Replace with your API URL and key
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=https://github.com/deepakdawade/Recipe-Finder.git`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayRecipes(data.results);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayRecipes(recipes) {
    const recipeResults = document.getElementById('recipeResults');
    recipeResults.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');

        recipeElement.innerHTML = `
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}">
        `;

        recipeResults.appendChild(recipeElement);
    });
}
