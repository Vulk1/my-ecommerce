
export const state = {
  products: [],
  productToRender: [],
  cart: [],
  categories : [],
  selectedProduct: null,
  userId : 9
};


export function setProducts(products) {
    state.products = Array.from(products);
    state.productToRender = Array.from(products);

    products.forEach(product => {
        if(!state.categories.includes(product.category)) {
            state.categories.push(product.category);
        }
    });
}

export function setProductsToRender(productsToRender) {
    state.productToRender = Array.from(productsToRender);
}

