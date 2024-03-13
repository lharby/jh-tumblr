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
        const modalList = document.querySelector(`.${modalClass}__list`);
        const close = event.target.classList.contains(closeClass);
        if (close && modalElem) {
            modalElem.classList.remove(openClass);
            modalList.replaceChildren();
            removeScrollLock();
        }
    });
};

export { modal };
