import {state} from '../state/state.js';
import {createCard} from '@/templates/product-card.js';

export function renderProducts() {
    const products = state.productToRender;
    const productsContainer = document.querySelector(".productsList");
    productsContainer.innerHTML = "";

    products.forEach(product => {
        let card = createCard(product);

        //card.addEventListener
        productsContainer.appendChild(card);
    });
}