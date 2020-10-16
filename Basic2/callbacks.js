const posts = [
    { title: 'Post One', body: 'This is one post'},
    { title: 'Post two', body: 'This is two post'},
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML= output;
    }, 1000)
};

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback()
  }, 2000)
}


createPost({ title: 'Post Three', body: 'This is post Three' }, getPosts);