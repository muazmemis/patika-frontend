// const hi = require('./my-module').default;
// const { hello: hello2 } = require('./my-module');
import hi, { hello as hello2 } from './my-module.js';


hi();
hello2();
