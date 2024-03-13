import { global } from '../global';

const scrollLockClass = 'scroll-lock';

const addScrollLock = () => {
    global.DOC.classList.add(scrollLockClass);
};

const removeScrollLock = () => {
    global.DOC.classList.remove(scrollLockClass);
};

const replaceSpaces = (elem) => elem.replace(/\s/g, '_');

const replaceUnderscores = (elem) => elem.replace(/_/g, ' ');

export { addScrollLock, removeScrollLock, replaceSpaces, replaceUnderscores };
