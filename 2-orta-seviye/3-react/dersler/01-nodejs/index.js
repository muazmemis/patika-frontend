console.log("Hello world");

const slugify = require("slugify");

const title1 = slugify("some string lorem ipsum");
const title2 = slugify("some string lorem ipsum", "/");

console.log(title1);
console.log(title2);
