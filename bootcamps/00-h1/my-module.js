function hello() {
  console.log('Hello, world!');
}

export default function hi() {
  console.log('Hi, world!.');
} 

export { hello };

// module.exports = {
//   default: hi,
//   hello,
// };
