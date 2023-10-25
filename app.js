document.addEventListener('DOMContentLoaded', () => {
    const loadRecipesButton = document.getElementById('loadRecipes');
    const recipeList = document.getElementById('recipeList');
    const searchInput = document.getElementById('searchInput');

    let recipesData = []; // Store the recipe data globally

    // Function to filter recipes based on ingredient search
    function filterRecipes(searchTerm) {
        const filteredRecipes = recipesData.dishes.filter(dish => {
            return dish.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm.toLowerCase()));
        });

        recipeList.innerHTML = '';

        filteredRecipes.forEach(dish => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${dish.name}</strong>: ${dish.ingredients.join(', ')}`;
            recipeList.appendChild(listItem);
        });
    }

    loadRecipesButton.addEventListener('click', async () => {
        try {
            // Fetch the JSON file containing recipes using async/await
            const response = await fetch('recipes.json');
            if (!response.ok) {
                throw new Error('Failed to fetch recipes');
            }
            const data = await response.json();
            recipesData = data; // Store the recipe data

            // Display all recipes initially
            filterRecipes('');
        } catch (error) {
            console.error('Error loading recipes:', error);
        }
    });

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim();
        filterRecipes(searchTerm);
    });
});
