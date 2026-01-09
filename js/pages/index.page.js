import  {getProducts } from '../api/products.api.js';
import { setProducts } from '../state/state.js';
import {renderProducts} from '../dom/product.dom.js';
import * as headerDom from '../dom/header.dom.js'
import * as productHandler from '../handlers/product.handlers.js';
import {state} from '../state/state.js';

async function init() {

    let products = await getProducts();
    setProducts(products);
    renderProducts();
   
    initHeader();
  
}



function initHeader() {
    const categories = state.categories;
    headerDom.addCategories(categories);
    headerDom.resetDomAffiliation();
    
    initHeaderEvents();
}

function initHeaderEvents() {

    headerDom.filterButtons.forEach(filterButton => {
        filterButton.addEventListener("click", productHandler.handleDisplayFilterOptions);
    });

    document.addEventListener("click", productHandler.resetElementsState);

    headerDom.filtersOptions.forEach(optionButton => {
        optionButton.addEventListener("click", productHandler.handleFilterOptionSelected);
    });

    headerDom.searchInput.addEventListener("input", productHandler.handleSearchProduct);
}

init();