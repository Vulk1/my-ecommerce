const userID = 10;

const apiLinks = {
    products : "https://fakestoreapi.com/products",
    carts : "https://fakestoreapi.com/carts",
    users : "https://fakestoreapi.com/users",
}


export async function getProducts() {
    let res = await fetch(apiLinks.products);

    if (!res.ok) {
        throw new Error('Erreur lors de la récupération des produits');
    }

    let data = await res.json();

    return data;
}

export async function getCarts() {
    let res = await fetch(apiLinks.carts);

    if (!res.ok) {
        throw new Error('Erreur lors de la récupération des produits');
    }
  

    let data = await res.json();

    return data;
}

export async function getCart(cartId) {
    let res = await fetch(`${apiLinks.carts}/${cartId}`);

    if (!res.ok) {
        throw new Error('Erreur lors de la récupération des produits');
    }
  
    let data = await res.json();

    return data;
}


export async function addCart(cart) {
    let res = await fetch(apiLinks.carts, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userId: userID,
            date : new Date().toISOString,
            products : cart
        })
    });
    
    if (!res.ok) {
        throw new Error('Erreur lors de l\'ajout d\'un panier');
    }
    
    let data = await res.json();

    return data;
}

export async function updateCart(cartId, cart) {
    let res = await fetch(`${apiLinks.carts}/${cartId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cart)
    });

    if (!res.ok) {
        throw new Error('Erreur lors de l\'ajout d\'un panier');
    }

    let data = await res.json();

    return data;

}

