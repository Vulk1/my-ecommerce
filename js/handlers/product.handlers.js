import * as headerDom from "../dom/header.dom.js";
import {state, setProductsToRender } from '../state/state.js';
import {renderProducts} from '../dom/product.dom.js';

export function handleDisplayFilterOptions(ev) {
    let button = ev.currentTarget;

    headerDom.displayFilterOptions(button);
    
}

export function resetElementsState(event) {
    headerDom.filtersContainer.forEach(container => {
        if(!container.contains(event.target)) {
            headerDom.hideOptions(container);
        }
  });
}

export function handleFilterOptionSelected(ev) {
    const optionSelected = ev.target;
    const optionType = optionSelected.dataset.type;
    const optionValue = optionSelected.dataset.value;

    switch(optionType) {
        case "sort":
            if(optionValue === "price-asc") {
                console.log("asc");
                const sortedByPriceAscProducts = Array.from(state.products);
                sortedByPriceAscProducts.sort( (a, b) => {
                    return a.price - b.price;
                });
                setProductsToRender(sortedByPriceAscProducts);
                renderProducts();
            } else if(optionValue === "price-desc") {
                console.log("desc");
                const sortedByPriceDescProducts = Array.from(state.products);
                sortedByPriceDescProducts.sort( (a, b) => {
                    return b.price - a.price;
                });
                setProductsToRender(sortedByPriceDescProducts);
                renderProducts();
            }
            break;
        case "category":
            if(state.categories.includes(optionValue)) {
                let filteredProductsByCategory = Array.from(state.products);
                filteredProductsByCategory = filteredProductsByCategory.filter(product => product.category === optionValue);
                setProductsToRender(filteredProductsByCategory);
                renderProducts();
            }  
            break;
    }
}


export function handleSearchProduct(e) {
    const query = e.target.value.toLowerCase().trim();

    console.log(query);
    state.productToRender = state.products.filter(product =>
    { return (product.title.toLowerCase().includes(query)) || 
             (product.category.toLowerCase().includes(query)) }
  );
  renderProducts();
}