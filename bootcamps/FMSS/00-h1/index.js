// const hi = require('./my-module').default;
// const { hello: hello2 } = require('./my-module');

// hi();
// hello2();

// console.log(slugify('some string'));

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => response.json())
//   .then((todo) => console.log('todo:', todo));

// fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then((response) => response.json())
//   .then((user) => console.log('User loaded:', user));

// async function fetchData() {
//   await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((res) => res.json())
//     .then((todo) => console.log('todo:', todo));
// }

// fetchData();

// (async () => {
//   await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((res) => res.json())
//     .then((todo) => console.log('todo:', todo));
// })();

// (async () => {
//   await axios('https://jsonplaceholder.typicode.com/todos/1')
//     .then((res) => res.data)
//     .then((todo) => console.log('todo:', todo));
// })();

// (async () => {
//   const { data: todo } = await axios('https://jsonplaceholder.typicode.com/todos/1');
//   console.log('todo:', todo);
// })();

// const queryRaw = { sortBy: sortInput, filterYear: selectedDate };
// const queryString = new URLSearchParams(queryRaw).toString();

// await axios(`https://jsonplaceholder.typicode.com/todos?${queryString}`).then((response) => console.log(response.data));
// await axios(`https://jsonplaceholder.typicode.com/todos?`, { params: queryRaw, data: {} }).then((response) =>
//   console.log(response.data)
// );

// ************************

function topla1(a, b) {
  return a + b;
}

const topla2 = () => {
  return a + b;
};

const topla3 = (a, b) => a + b;

// promise
// const getComments = () => {
//   return new Promise((resolve, reject) => {
//     console.log('comment requested');
//     // resolve();
//     // reject("hata 1");
//     reject(new Error('Not ok'));
//   });
// };

// getComments()
//   .then(() => console.log('istek atıldı'))
//   .catch((e) => console.log(e));
// // .catch((e) => console.log(e.message));

// const getComments = (id) => {
//   return new Promise((resolve, reject) => {
//     console.log('comment requested');
//     if (id === 1) {
//       resolve({ success: true });
//     } else {
//       reject(new Error(`Not ok. Expected id:1, Received: ${id}`));
//     }
//   });
// };

// // success
// getComments(1)
//   .then(() => console.log('istek atıldı'))
//   .catch((e) => console.log(e));

// // failed
// getComments(2)
//   .then(() => console.log('istek atıldı'))
//   .catch((e) => console.log(e));

import axios from 'axios';

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios('https://jsonplaceholder.typicode.com/users');
    resolve(data);
  });
};

getUsers()
  .then((data) => {
    console.log('data recevied: ', data);
  })
  .catch((e) => console.log(e));
