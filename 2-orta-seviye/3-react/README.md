# REACT

## Real Dom / Virtual Dom

| Real Dom | Virtual Dom |
| - | - |
| DOM manipulation is very expensive | DOM manipulation is very easy|
| There is too much memory wastage | No memory wastage |
| It updates Slow | It updates fast |
| It can directly update HTML | It can’t update HTML directly |
| Creates a new DOM if the element updates | Update the JSX if the element update |
| It allows us to directly target any specific
node (HTML element) | It can produce about 200,000 Virtual DOM
Nodes / Second |
| It represents the Ul of your application | It is only a virtual representation of the DOM |

## ES6

- Arrow function ecmascript 6 ile geldi.
- backtick (`) ile string içinde parametre yazılabilir.

# React

```sh
npx create-react-app my-app 
cd my-app
npm start # yarn start
```

```sh
mkdir my-app
cd my-app
npx create-react-app . # yarn create react-app my-app
npm start
```