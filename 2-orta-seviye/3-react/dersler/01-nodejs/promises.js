import axios from "axios";

/* 
const getComments = (number) => {
  return new Promise((resolve, reject) => {
    // console.log("comments");

    if (number === 1) resolve("comments");
    else reject("Bir problem oluştu.");
  });
};

getComments(1)
  .then((data) => console.log(data, "bitti"))
  .catch((e) => console.log(e));
 */

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    resolve(data);
    // reject("Bir problem oluştu. users");
  });
};

const getPost = (id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
    resolve(data);
    // reject("Bir problem oluştu. post");
  });
};

/* 
getUsers()
  .then((data) => console.log(data, "users"))
  .catch((e) => console.log(e));

getPost(1)
  .then((data) => console.log(data, "post"))
  .catch((e) => console.log(e));
 */

/* 
(async () => {
  await getUsers()
    .then((data) => console.log(data, "users"))
    .catch((e) => console.log(e));

  await getPost(1)
    .then((data) => console.log(data, "post"))
    .catch((e) => console.log(e));
})();
 */

/* 
(async () => {
  try {
    const users = await getUsers();
    const post = await getPost(1);

    console.log(users, "user");
    console.log(post, "post");
  } catch (e) {
    console.log(e);
  }
})();
 */

Promise.all([getUsers(), getPost(1)])
  .then(console.log)
  .catch(console.log);
