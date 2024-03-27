import styles from './scss/main.scss';

/* utils */
import { createCustomElement } from './js/utils/customElement';
import pageDirectory from './js/components/pageDirectory';

/* components */
import { modal } from './js/components/modal';
import { getPosts } from './js/components/getPosts';
import { admin } from './js/components/admin';
import '../src/js/components/setDraggable';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('html').classList.remove('no-js');
    createCustomElement();
    modal();
    pageDirectory();
    getPosts();
    admin();
});
