import { global } from './global';
const postWrapper = document.querySelector('.posts');
const tagWrapper = document.querySelector('.tags');
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
                console.log(`total posts: ${response.response.total_posts}`);
                const posts = response.response.posts;
                if (postWrapper) {
                    posts.forEach((item) => {
                        const li = document.createElement('li');
                        li.classList.add('el', 'el-3');
                        li.innerHTML = item.body;
                        postWrapper.appendChild(li);
                    });
                }
                posts.map((item) => item.tags.map((tag) => tags.push(tag.toLowerCase())));
                arrTags = [...new Set(tags.sort())];
                console.log(arrTags);
                if (tagWrapper) {
                    arrTags.forEach((item) => {
                        const itemHREF = item.replaceAll(' ', '+');
                        console.log(item);
                        const template = `<li><a href=${global.blogURL}/tagged/${itemHREF} target="_blank">${item}</li>`;
                        tagWrapper.innerHTML += template;
                    });
                }
            }
        });
};

export { getPosts };