import { addScrollLock, removeScrollLock } from '../utils/utils';

const modal = () => {
    const modalClass = 'modal';
    const openClass = `${modalClass}__open`;
    const closeClass = `${modalClass}__close`;
    let modalElem;

    document.addEventListener('click', (event) => {
        modalElem = document.querySelector('.modal');
        const current = event.target.closest('.post-trigger');
        if (current && modalElem) {
            modalElem.classList.add(openClass);
            addScrollLock();
        }
    });

    document.addEventListener('click', (event) => {
        const close = event.target.classList.contains(closeClass);
        if (close && modalElem) {
            closeModal();
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    const closeModal = () => {
        const modalContent = document.querySelector(`.${modalClass}__content--inner`);
        const modalList = document.querySelector(`.${modalClass}__list`);
        modalElem.classList.remove(openClass);
        modalContent.replaceChildren();
        modalList.replaceChildren();
        removeScrollLock();
    };
};

export { modal };
