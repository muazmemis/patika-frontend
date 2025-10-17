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

(async () => {
  await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.json())
    .then((todo) => console.log('todo:', todo));
})();
