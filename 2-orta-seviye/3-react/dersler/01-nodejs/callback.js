// setTimeout(() => {
//     console.log("hello");
// }, 2000) // 2 sn sonra çalıştır

// setInterval(() => {
//   console.log("Hello!!");
// }, 1000); // her 1 sn de bir çalışır

// const sayHi = (cb) => {
//   cb();
// };

// sayHi(() => {
//   console.log("Hello");
// });

import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log("Users loading", users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1") // bu şekilde yazılmazsa hangisinin önce yükleneceği garanti edilemez
//       .then((data) => data.json())
//       .then((post) => {
//         console.log("Post 1 loading", post);

//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//           .then((data) => data.json())
//           .then((post) => {
//             console.log("Post 2 loading", post);
//           });
//       });
//   });

/* 
async function getData() {
  const users = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();

  const post1 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
  ).json();

  const post2 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/2")
  ).json();


  console.log("users", users);
  console.log("post 1", post1);
  console.log("post 2", post2);
}

getData(); 
*/

// (() => console.log("Hello"))();
(async () => {
  const users = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();

  const post1 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
  ).json();

  const post2 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/2")
  ).json();

  console.log("users", users);
  console.log("post 1", post1);
  console.log("post 2", post2);
})();
