export function createCard(product) {
  const template = document.querySelector('#product-card-template');
  if (!template) throw new Error('Template introuvable');

  // Clone le template
  const clone = template.content.cloneNode(true);

  // Remplissage dynamique
  const img = clone.querySelector('.product-card__image');
  img.src = product.image;
  img.alt = product.title;

  clone.querySelector('.product-card__title').textContent = product.title;
  clone.querySelector('.product-card__price').textContent = `${product.price} €`;
  clone.querySelector('.product-card__category').textContent = product.category;

  clone.querySelector('.product-card__seeProduct').addEventListener('click', () => {
    console.log('Produit cliqué', product.id);
  });

  return clone; // élément DOM prêt à être ajouté
}
