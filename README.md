# My E-commerce Vanilla JS

Mini site e-commerce construit avec **HTML5, CSS3 et JavaScript (ES6+)**.  
Il permet de lister des produits, afficher les détails dans un modal et gérer un panier persistant côté client.

---

## Fonctionnalités

- Liste des produits récupérés depuis la **Fake Store API**  
- Modal pour voir le détail d’un produit  
- Ajouter / retirer des produits du panier  
- Panier persistant via **localStorage**  
- Interface responsive et agréable sur mobile et desktop  
- Architecture modulaire (state / dom / handlers / api)

## Tech & outils utilisés

- **HTML5 / CSS3 / JavaScript (ES6+)**  
- **npm** : pour gérer les outils de développement et dépendances  
- **Vite** : serveur local rapide et bundler moderne  
- **Fake Store API** : récupération des produits via API publique  
- **localStorage** : stockage du panier côté client
- **Git & GitHub** : Stockage du code source

## Structure du projet


my-ecommerce/
├─ index.html                  # liste produits + modal
├─ cart.html                   # page panier
│
├─ templates/
│  ├─ product-card.html        # carte produit
│  ├─ product-modal.html       # modal détail produit
│  └─ cart-item.html           # item panier
│
├─ css/
│  ├─ reset.css
│  ├─ layout.css               # header, grilles
│  ├─ components.css           # cards, modal, boutons
│  └─ pages/
│     ├─ index.css
│     └─ cart.css
│
├─ js/
│  ├─ state/
│  │  └─ state.js              # products, cart
│  │
│  ├─ api/
│  │  └─ products.api.js       # fetch produits
│  │
│  ├─ dom/
│  │  ├─ templateLoader.js
│  │  ├─ product.dom.js        # render cards + modal
│  │  ├─ cart.dom.js           # render panier
│  │  └─ header.dom.js         # compteur panier
│  │
│  ├─ handlers/
│  │  ├─ product.handlers.js   # open modal, addToCart
│  │  └─ cart.handlers.js
│  │
│  ├─ pages/
│  │  ├─ index.page.js         # logique index
│  │  └─ cart.page.js          # logique panier
│  │
│  └─ main.js                  
│
├─ assets/
│  └─ images/
│
├─ README.md
└─ .gitignore

---

## ⚡ Pré-requis

Pour développer ou lancer le projet en local, vous devez avoir :

- **Node.js** et **npm** installés : [https://nodejs.org](https://nodejs.org)  

> npm est utilisé uniquement pour le développement (serveur local et build).  
> Le site peut être consulté après build sans npm.

---

## Installation & lancement

1. Cloner le projet

```bash
git clone https://github.com/votre-username/my-ecommerce.git
cd my-ecommerce
```

2. Installer les dépendances

npm install

3. Lancer le serveur local (développement)

npm run dev

Ouvrir l’URL affichée par Vite (ex : http://localhost:5173)
Modifier le code → Vite recharge automatiquement les fichiers

4. Build pour la production

npm run build

Les fichiers optimisés sont générés dans le dossier dist/

(Vous pouvez héberger ces fichiers sur Netlify, GitHub Pages ou tout autre serveur)

5. Aperçu du build

npm run preview


License : MIT

---

**Tout est prêt** pour GitHub :  

- Les commandes à taper sont dans **blocs bash**  
- Les imports / modules sont expliqués  
- npm et Vite sont mentionnés dans la section “Tech & outils”  
- Instructions claires pour **développement et build**  

