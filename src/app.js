import styles from './scss/main.scss';
import { getPosts } from './js/getPosts';
import { createCustomElement } from './js/customElement';
import pageDirectory from './js/pageDirectory';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('html').classList.remove('no-js');
    createCustomElement();
    pageDirectory();
    getPosts();
});
