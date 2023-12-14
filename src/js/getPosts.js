import { global } from './global';
const wrapper = document.querySelector('.posts');
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
                posts.forEach((item) => {
                    const li = document.createElement('li');
                    li.classList.add('el', 'el-3');
                    li.innerHTML = item.body;
                    wrapper.appendChild(li);
                });
                posts.map((item) => item.tags.map((tag) => tags.push(tag.toLowerCase())));
                arrTags = [...new Set(tags.sort())];
                console.log(arrTags);
            }
        });
};

export { getPosts };
