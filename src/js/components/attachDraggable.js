/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

import { global } from '../global';
import { draggable } from '../utils/draggable';

const attachDraggable = () => {
    const boxes = global.DOC.querySelectorAll('.index-posts > li');
    const arrBoxes = [...boxes];
    let draggableItem;
    for (let i = 0; i < arrBoxes.length; i++) {
        draggableItem = new draggable(boxes[i]);
    }
    draggableItem.run();
};

export { attachDraggable };
