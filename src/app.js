import styles from './scss/main.scss';
import { createCustomElement } from './js/utils/customElement';

import { modal } from './js/components/modal';
import pageDirectory from './js/components/pageDirectory';
import { getPosts } from './js/components/getPosts';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('html').classList.remove('no-js');
    createCustomElement();
    modal();
    pageDirectory();
    getPosts();
});
