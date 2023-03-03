// const slugify = require("slugify");
import slugify from "slugify";
// import SumCallName from "./my-module.js";
import mainDiffName, { hello, sum, mines, text, user, users } from "./my-module.js"; // export default süslü paranteze ihtiyaç yok. farklı bir isim verilebilir

console.log("Hello world");

const title1 = slugify("some string lorem ipsum");
const title2 = slugify("some string lorem ipsum", "/");

console.log(title1);
console.log(title2);

// console.log("from my-module: " + SumCallName(2, 4));
console.log("from my-module: " + sum(2, 4));
console.log("from my-module: " + mines(18, 4));
// hello();
hello("Muaz");
mainDiffName();

console.log(text);
console.log(user);
console.log(users);
