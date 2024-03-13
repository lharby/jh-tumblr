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
                            const template = `<li class="el el-2"><a href=${tag} class="post-trigger">${item.body}</a></li>`;
                            postWrapper.insertAdjacentHTML('beforeend', template);
                        });
                    }

                    if (dataWrapper) {
                        dataWrapper.textContent = JSON.stringify(posts[0], null, 4);
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
                        if (tagWrapper) {
                            setTags();
                        }
                    }
                }
            })
            .catch((error) => {
                global.DOC.classList.remove(loadingClass);
                console.error('Error:', error.message);
            })
            .finally(() => {
                global.DOC.classList.remove(loadingClass);
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
    const modal = document.querySelector('.modal__list');
    document.addEventListener('click', (event) => {
        event.preventDefault();
        const current = event.target.closest('.post-trigger');
        if (current) {
            return resultFinal.forEach((item, index) => {
                const itemName = replaceUnderscores(item.name);
                const targetName = replaceUnderscores(current.getAttribute('href'));
                const setName = resultFinal[index].value;
                if (itemName === targetName) {
                    console.log(resultFinal[index].name, setName);
                    setName.forEach((item) => {
                        const template = `<li class="el el-3">${item.body}</li>`;
                        modal.insertAdjacentHTML('beforeend', template);
                    });
                }
            });
        }
    });
};

export { getPosts };
