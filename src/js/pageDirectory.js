import { global } from './global';

const pageDirectory = () => {
    const dir = global.docLocation.pathname.split('/');
    const primaryDir = dir[1];
    const secondaryDir = dir[2];
    if (!primaryDir) {
        global.DOC.classList.add('index');
    } else if (secondaryDir) {
        global.DOC.classList.add(primaryDir);
        global.DOC.classList.add(secondaryDir);
    } else if (primaryDir) {
        global.DOC.classList.add(primaryDir);
    }
};

export default pageDirectory;
