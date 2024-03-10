import { global } from './global';
const postWrapper = document.querySelector('ul.posts');
const tagWrapper = document.querySelector('ul.tags');
const dataWrapper = document.querySelector('pre.data');
let tags = [];
let arrTags = [];

const getPosts = () => {
    const url = new URL(`https://${global.apiBaseURL}${global.apiBlog}/posts?`);
    url.searchParams.set('api_key', global.oAuthConsumerKey);
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch(url, options)
        .then((response) => response.json())
        .then((response) => {
            if (response) {
                const posts = response.response.posts;
                if (postWrapper) {
                    posts.forEach((item) => {
                        const href = item.post_url;
                        const template = `<li class="el el-2"><a href=${href} target="_blank">${item.body}</a></li>`;
                        postWrapper.innerHTML += template;
                    });
                }
                posts.map((item) => item.tags.map((tag) => tags.push(tag.toLowerCase())));
                arrTags = [...new Set(tags.sort())];
                if (tagWrapper) {
                    arrTags.forEach((item) => {
                        const itemHREF = item.replaceAll(' ', '+');
                        const template = `<li><a href=${global.blogURL}/tagged/${itemHREF} target="_blank">${item}</li>`;
                        tagWrapper.innerHTML += template;
                    });
                }
                if (dataWrapper) {
                    dataWrapper.textContent = JSON.stringify(posts, null, 4);
                }
            }
        });
};

export { getPosts };
