import '@fortawesome/fontawesome-free/css/all.min.css';
import  {getProducts, getCarts } from './api/products.api.js';
import {loadTemplate} from '@/js/dom/templateLoader.js';

console.log("Le serveur est ouvert !");

async function init() {
    await loadTemplate();
}

init();
