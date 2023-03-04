// function sum(a, b) {
//   return a + b;
// }

// const sum = function sum(a, b) {
//   return a + b;
// };

// const sum = (a, b) => {
//   return a + b;
// };

// const sum = (a, b) => a + b;

// export default sum;

// **********************************

// export const sum = (a, b) => a + b;

// export const hello = () => {
//   console.log("Hello");
// };

// **********************************

const sum = (a, b) => a + b;
const mines = (a, b) => a - b;

const hello = (name) => {
  // console.log("Hello " + name);
  console.log(`Hello ${name}`);
};

const main = () => console.log("export default function");
// export default function main() {
//   console.log("export default function");
// }

export const text = "text";
export const user = {
  name: "Muaz",
  surname: "Memiş",
};
export const users = [
  {
    name: "Musab",
    surname: "Memiş",
  },
  {
    name: "Sadık",
    surname: "Memiş",
  },
  {
    name: "Abdussamed",
    surname: "Memiş",
  },
];

export { sum, hello, mines };
export default main;
