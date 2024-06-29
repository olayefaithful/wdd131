import { recipes } from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const recipeSection = document.querySelector('.recipes');

    recipes.forEach(recipe => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${renderStars(recipe.rating)}
            </div>
            <p class="description">${recipe.description}</p>
        `;
        recipeSection.appendChild(article);
    });
});

function renderStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<span aria-hidden="true" class="icon-star">⭐</span>';
        } else {
            stars += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
        }
    }
    return stars;
}
