import { recipes } from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('form');
    const searchInput = document.querySelector('input[type="search"]');
    const recipeSection = document.querySelector('.recipes');

    function random(num) {
        return Math.floor(Math.random() * num);
    }

    function getRandomListEntry(list) {
        const listLength = list.length;
        const randomNum = random(listLength);
        return list[randomNum];
    }

    function tagsTemplate(tags) {
        return tags.map(tag => `<li>${tag}</li>`).join('');
    }

    function ratingTemplate(rating) {
        let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
        for (let i = 0; i < 5; i++) {
            html += i < rating ? '<span aria-hidden="true" class="icon-star">⭐</span>' : '<span aria-hidden="true" class="icon-star-empty">☆</span>';
        }
        html += '</span>';
        return html;
    }

    function recipeTemplate(recipe) {
        return `
            <figure class="recipe">
                <img src="${recipe.image}" alt="image of ${recipe.name}" />
                <figcaption>
                    <ul class="tags">
                        ${tagsTemplate(recipe.tags)}
                    </ul>
                    <h2><a href="#">${recipe.name}</a></h2>
                    <p class="recipe__ratings">
                        ${ratingTemplate(recipe.rating)}
                    </p>
                    <p id="description">
                        ${recipe.description}
                    </p>
                </figcaption>
            </figure>
        `;
    }

    function renderRecipes(recipeList) {
        recipeSection.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    }

    function filterRecipes(query) {
        return recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(query.toLowerCase()) ||
            recipe.description.toLowerCase().includes(query.toLowerCase()) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        ).sort((a, b) => a.name.localeCompare(b.name));
    }

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const query = searchInput.value.trim().toLowerCase();
        if (query) {
            const filteredRecipes = filterRecipes(query);
            renderRecipes(filteredRecipes);
        }
    });

    function init() {
        const recipe = getRandomListEntry(recipes);
        renderRecipes([recipe]);
    }

    init();
});
