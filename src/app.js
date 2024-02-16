import styles from './scss/main.scss';
import { getPosts } from './js/getPosts';
import { createCustomElement } from './js/customElement';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('html').classList.remove('no-js');
    createCustomElement();
    getPosts();
});
