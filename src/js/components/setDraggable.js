/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

import { global } from '../global';
let arrLayout;

global.DOC.addEventListener('click', (event) => {
    const href = event.target.href && event.target.getAttribute('href') === 'save';
    if (href) {
        event.preventDefault();
        arrLayout = [];
        const boxes = global.DOC.querySelectorAll('.index-posts > li');
        boxes.forEach((item) => {
            let layout = {
                id: item.id,
                left: item.style.left,
                top: item.style.top,
                width: item.style.width,
                height: item.style.height
            };
            layout = JSON.stringify(layout);
            arrLayout.push(layout);
        });
        console.log(arrLayout);
    }
});
