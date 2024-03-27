import { global } from '../global';

const admin = () => {
    global.DOC.addEventListener('click', (event) => {
        const href = event.target.href && event.target.getAttribute('href') === 'admin';
        if (href) {
            event.preventDefault();
            global.DOC.classList.toggle('admin');
        }
    });
};

export { admin };
