# REACT

## Real Dom / Virtual Dom

| Real Dom                                 | Virtual Dom                          |
| ---------------------------------------- | ------------------------------------ |
| DOM manipulation is very expensive       | DOM manipulation is very easy        |
| There is too much memory wastage         | No memory wastage                    |
| It updates Slow                          | It updates fast                      |
| It can directly update HTML              | It can’t update HTML directly        |
| Creates a new DOM if the element updates | Update the JSX if the element update |

| It allows us to directly target any specific
node (HTML element) | It can produce about 200,000 Virtual DOM
Nodes / Second |
| It represents the Ul of your application | It is only a virtual representation of the DOM |

## ES6

- Arrow function ecmascript 6 ile geldi.
- backtick (`) ile string içinde parametre yazılabilir.

## Create React

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

```sh
create-react-library
npm start # cd example | npm start
npm login
npm publish
npm version patch -f # 1.0.1
npm version minor -f # 1.1.0
npm upgrade incsoft # test-project
```

```sh
yarn add axios
yarn add react-router-dom
yarn add formik
yarn add yup
yarn add socket.io-client
npm install --save react-scrollable-feed
yarn add react react-intl
```

```sh
git submodule add https://github.com/MuazMemis/react-deploy.git ./2-orta-seviye/3-react/dersler/17-deploying/netlify-aws

# update
git rm --cached 2-orta-seviye/3-react/dersler/17-deploying/netlify
git submodule sync
git submodule update --remote
```

[axios](https://formik.org/docs/examples/basic)

[router v6](https://formik.org/docs/examples/basic)

[formik](https://formik.org/docs/examples/basic)

[yupjs](https://github.com/jquense/yup)

[npm-package-name-checker](https://remarkablemark.org/npm-package-name-checker)

[surge.sh](https://surge.sh)
