const global = {
    protocol: document.location.protocol,
    apiBaseURL: 'api.tumblr.com/v2/blog/',
    // apiBlog: 'jh-test.tumblr.com',
    apiBlog: 'jessicaharbydotcom.tumblr.com',
    oAuthConsumerKey: atob('MW5KZmtyMG9XZzBzTmxHS0ttNXB4NG43TVBETWFZb2x1R0NwbkZuRk1WejlJbHlIUFc='),
    blogURL: 'https://jh-test.tumblr.com/',
    docLocation: document.location,
    DOC: document.querySelector('html')
};

export { global };
