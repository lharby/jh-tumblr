import { global } from '../global';
import { replaceSpaces, replaceUnderscores } from '../utils/utils';
const postWrapper = document.querySelector('ul.posts');
const tagWrapper = document.querySelector('ul.tags');
const dataWrapper = document.querySelector('pre.data');
const loadingClass = 'loading';
let tags = [];
let arrTags = [];
let allPosts = [];
let posts;
let resultFinal;

const getPosts = () => {
    let limit = 20;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const retrieveMore = (offset) => {
        const url = new URL(`https://${global.apiBaseURL}${global.apiBlog}/posts?offset=${offset}`);
        url.searchParams.set('api_key', global.oAuthConsumerKey);
        global.DOC.classList.add(loadingClass);
        fetch(url, options)
            .then((response) => response.json())
            .then((response) => {
                if (response) {
                    const postLength = response.response.posts.length;
                    const totalPosts = response.response.total_posts;
                    posts = response.response.posts;
                    if (postWrapper) {
                        posts.forEach((item) => {
                            allPosts.push(item);
                            const tag = replaceSpaces(item.tags[0]);
                            const template = `<li class="el"><a href=${tag} class="post-trigger">${item.body}</a></li>`;
                            postWrapper.insertAdjacentHTML('beforeend', template);
                        });
                    }

                    if (dataWrapper) {
                        dataWrapper.textContent = JSON.stringify(posts[0], null, 4);
                        resetAjaxState();
                        return;
                    }

                    /*
                    Lets keep pushing all of the tags to the tag array
                    */
                    posts.map((item) => item.tags.map((tag) => tags.push(tag.toLowerCase())));

                    /* 
                    As long as our total no of posts is greater than our counter keep iterating over the posts
                    */
                    if (totalPosts >= offset && postLength !== 0) {
                        retrieveMore(offset + limit);
                    }
                    /* 
                    Once our counter is larger or the same size as
                    the total number of posts, 
                    lets output the array of unique tags. 
                    */
                    if (offset >= totalPosts) {
                        arrTags = [...new Set(tags.sort())];
                        setAllPostsToObjects();
                        attachClickEvent();
                        resetAjaxState();
                        if (tagWrapper) {
                            setTags();
                        }
                    }


                }
            })
            .catch((error) => {
                console.error('Error:', error.message);
                resetAjaxState();
            })
            .finally(() => {
                console.log('all posts loaded');
            });
    };
    retrieveMore(0);
};

const setTags = () => {
    arrTags.forEach((item) => {
        const itemHREF = item.replaceAll(' ', '+');
        const template = `<li><a href=${global.blogURL}/tagged/${itemHREF} target="_blank">${item}</li>`;
        tagWrapper.innerHTML += template;
    });
};

const setAllPostsToObjects = () => {
    const newSets = arrTags.map((item) => {
        return allPosts.filter((postItem) => {
            return postItem.tags[0] === item;
        });
    });

    resultFinal = arrTags.map((key, i) => {
        key = replaceSpaces(key);
        return { name: key, value: newSets[i] };
    });
};

const attachClickEvent = () => {
    const modalContent = document.querySelector('.modal__content');
    const modalList = document.querySelector('.modal__list');
    document.addEventListener('click', (event) => {
        const current = event.target.closest('.post-trigger');
        if (current) {
            event.preventDefault();
            const parser = new DOMParser();
            return resultFinal.forEach((item, index) => {
                const itemName = replaceUnderscores(item.name);
                const targetName = replaceUnderscores(current.getAttribute('href'));
                const setName = resultFinal[index].value;
                if (itemName === targetName) {
                    const firstItem = setName[0].body;
                    setName.forEach((item) => {
                        const doc = parser.parseFromString(item.body, 'text/html');
                        const images = doc.querySelectorAll('img');
                        images.forEach((imageItem) => {
                            const thumbnail = imageItem.srcset.split(',')[0].split(' ')[0];
                            const template = `<li><a href="#${item.id}" class="thumbnail-trigger"><img src=${thumbnail} /></a></li>`;
                            thumbnail ? modalList.insertAdjacentHTML('beforeend', template) : null;
                        });
                    });
                    modalContent.insertAdjacentHTML('beforeend', firstItem);
                }
            });
        }
    });

    document.addEventListener('click', (event) => {
        const current = event.target.closest('.thumbnail-trigger');
        if (current) {
            event.preventDefault();
            modalContent.replaceChildren();
            const href = current.href.split('#')[1];
            allPosts.forEach(() => {
                const newPost = allPosts.filter((item) => item.id.toString() === href);
                modalContent.innerHTML = newPost[0].body;
            });
        }
    });
};

const resetAjaxState = () => global.DOC.classList.remove(loadingClass);

export { getPosts };
