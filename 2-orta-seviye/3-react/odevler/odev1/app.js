import axios from "axios";

const getData = (id) => {
  return new Promise(async (resolve, reject) => {
    const { data: user } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + id
    );

    const { data: posts } = await axios(
      "https://jsonplaceholder.typicode.com/posts?userId=" + id
    );

    resolve({ user, posts });
  });
};

export default getData;
