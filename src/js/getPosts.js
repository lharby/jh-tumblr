import { global } from './global';
const postWrapper = document.querySelector('ul.posts');
const tagWrapper = document.querySelector('ul.tags');
const dataWrapper = document.querySelector('pre.data');
const loadingClass = 'loading';
let tags = [];
let arrTags = [];
let posts;

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
                            const href = item.post_url;
                            const template = `<li class="el el-2"><a href=${href} class="trigger" target="_blank">${item.body}</a></li>`;
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
                    if (offset >= totalPosts && tagWrapper) {
                        arrTags = [...new Set(tags.sort())];
                        setTags();
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

export { getPosts };
