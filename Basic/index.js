const fetchData = (userId, callback) => {
    setTimeout(() => {
        const fakeData = {
            id: userId,
            name: 'George'
        };
        callback(fakeData)
    }, 300);
};

const cb = data => console.log('Here is  yours data:', data);

fetchData(5, cb);

// Promises
// new Promise((resolve,reject) = >{})

const fetchData2 = userId => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject('Fetch failed!')
      }
      const fakeData = {
        id: userId,
        name: 'George'
      };
      resolve(fakeData)
    }, 300)
  });
};

fetchData2(10)
  .then(user => console.log('Here is  yours data:', user))
  .catch(err => console.error(err))

Promise.all([fetchData2(7), fetchData2(10), fetchData2(8) ])
  .then(users => console.log('Here is  yours data:', users))
  .catch(err => console.error(err))

// Async-Await

const fetchUser = async userId => {
  try {
    const user = await fetchData2(userId)
    console.log('Here is  yours data:', user)
  } catch (err) {
    console.error(err)
  }
}

fetchUser(100)