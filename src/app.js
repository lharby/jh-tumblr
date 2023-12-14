import styles from './scss/main.scss';
import { getPosts } from './js/getPosts';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('html').classList.remove('no-js');
    getPosts();
});
