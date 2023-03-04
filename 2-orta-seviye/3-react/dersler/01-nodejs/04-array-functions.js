// const users = ["Muaz", "Sadık", "Abdussamed", "Musab"];
const users = [
  {
    name: "Muaz",
    age: 33,
    // age: 13,
  },
  {
    name: "Sadık",
    age: 8,
  },
  {
    name: "Abdussamed",
    age: 4,
  },
];

/*
    push
    map
    find
    filter
    some
    every
    includes
*/

// push
// users.push("Bilal");
// console.log(users);

// map
// users.map((item) => console.log("Hello " + item));
// users.map((item) => console.log("Hello " + item.name));

// find
// const findByName = users.find((item) => item.name === "Muaz" && item.age > 20);
// const findByName = users.find((item) => item.age < 20);
// console.log(findByName);

// filter
// const filtered = users.filter((item) => item.age < 30);
// const filtered = users.filter(({ name, age }) => name === "Sadık" && age < 30);
// console.log(filtered);

// some => return true or false. koşulu sağlayan bir kişi olsa yeterli
// const some = users.some((item) => item.age < 8);
// console.log(some);

// every => bütün hepsinin koşulu sağlaması gerekiyor
// const every = users.every((item) => item.age > 3);
// console.log(every);

// includes
const fruits = ["apple", "pear", "banana"];
const isIncluded = fruits.includes("banana");
console.log(isIncluded);
