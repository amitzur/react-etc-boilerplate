# react-etc-boilerplate
Yet another, and yet my very own personal boilerplate for react-webpack-etc

The intention is to progress this boilerplate at the same pace of my learning curve. Each tag should be a complete usable project. The roadmap as I see it:
- webpack
- react
- react-router
- flux (probably redux)

## Usage
First, clone this repo.

To build into the `dist` folder
```shell
$ npm run build
```

To run the webpack dev server
```shell
$ npm start
```

Then, go to `http://localhost:8080`

## Webpack
A great tutorial is at (http://www.pro-react.com/materials/appendixA/)[http://www.pro-react.com/materials/appendixA/]
Naturally this should begin with the css loaders, source maps, HMR, ES6, and npm scripts.
Next there should be a production configuration.

## React
Adding react babel tranformation, react HMR, initial JSX file and components directory.

A good inspiration came from [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate)

## CSS Modules
Ability to require a specific style into component. More info [here](https://github.com/css-modules/css-modules).

For including source maps I took [this example](https://github.com/webpack/css-loader/issues/81).

## React Router
Not sure how this works

## Redux
Adding redux, redux-react, redux-simple-router plus some middlewares. Directory structure will change considerably.

