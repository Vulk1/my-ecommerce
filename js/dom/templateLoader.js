export async function loadTemplate() {
  const res = await fetch('/templates/product-card.html');
  const htmlText = await res.text();

  // Crée un conteneur temporaire pour parser le HTML
  const container = document.createElement('div');
  container.innerHTML = htmlText;

  // Ajoute le template au DOM (invisible)
  document.body.appendChild(container);
}