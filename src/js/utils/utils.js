import { global } from '../global';

/**
 * Find out whether or not the given argument is an element that would react somewhat normally to DOM-manipulations.
 *
 * @since 3.7.0
 * @param {*} element - The element to check.
 * @returns {boolean} `true` if the given argument is an element (or document, or window), and `false` otherwise.
 */
export function isElement(element) {
    return element instanceof Element || element instanceof Document || element instanceof Window;
}

/**
 * Get the current scroll values of the given element (or window). Will return an object containing
 * "left" and "top" properties, which are set to the scroll values, or false if no compatible element
 * was given.
 *
 * @param {Element|Window} [element=window]
 * @returns {{ left: number, top: number } | boolean}
 */
export function getElementScroll(element = window) {
    if (isElement(element)) {
        if (element instanceof Window) {
            return {
                left: element.pageXOffset || document.documentElement.scrollLeft,
                top: element.pageYOffset || document.documentElement.scrollTop,
            };
        } else {
            return {
                left: element.scrollX || element.scrollLeft,
                top: element.scrollY || element.scrollTop,
            };
        }
    } else {
        return false;
    }
}

const scrollLockClass = 'scroll-lock';
let scrollTop = 0;
export let isScrollLocked = false;

const addScrollLock = () => {
    if (!isScrollLocked) {
        // Get scroll position
        const scrollPosition = getElementScroll();
        global.DOC.style.marginTop = `${-scrollPosition.top}px`;
        global.DOC.classList.add(scrollLockClass);
        // Remember state
        isScrollLocked = true;
        scrollTop = scrollPosition.top;
    }
};

const removeScrollLock = () => {
    if (isScrollLocked) {
        const scrollPosition = getElementScroll();
        global.DOC.classList.remove(scrollLockClass);
        global.DOC.style.marginTop = '';
        global.DOC.style.marginLeft = '';
        // Set the scroll position to what it was before
        window.scrollTo(scrollPosition.left, scrollTop);
        // Remember state
        isScrollLocked = false;
    }
};

const replaceSpaces = (elem) => elem.replace(/\s/g, '_');

const replaceUnderscores = (elem) => elem.replace(/_/g, ' ');

export { addScrollLock, removeScrollLock, replaceSpaces, replaceUnderscores };
