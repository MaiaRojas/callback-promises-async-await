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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        posts.push(post);
        const error = false;
        if (!error) {
          resolve()
        } else {
          reject('Error: Something went wrong')
        }
      }, 2000)
  })
  
}


// createPost({ title: 'Post Three', body: 'This is post Three' })
//   .then(getPosts)
//   .catch(err => console.error(err))

const promise1 = Promise.resolve('Hello world');
const promise2 = 30;
const promise3 = new Promise((resolve,reject) => setTimeout(resolve, 2000, 'Goodbye'));

const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res =>res.json());

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values))


// Async Await

// async function init() {
//   await createPost({ title: 'Post Three', body: 'This is post Three' });
//   getPosts();
// }

// init();

// Async / Await / Fetch 

async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data)
}

fetchUsers();