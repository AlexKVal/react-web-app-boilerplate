# react-web-app-boilerplate
React + Webpack + Babel web application boilerplate

## Features

* JSX, ES6, and ES7 support with babel.js
* Source maps included in all builds
* Development server with hot reload when possible and refresh otherwise
* Production builds with cache busting and asset minification
* Testing environment using karma to run tests and mocha as the framework
* Code coverage when tests are run
* No gulp and no grunt, just npm run-scripts

## Installation

```shell
> git clone https://github.com/AlexKVal/react-web-app-boilerplate.git project_name_folder
> cd project_name_folder
> npm install
> npm run dev
```
Browser window will auto-open and wait `http://localhost:8080/`

## Scripts

All scripts are run with `npm run [script]`, for example: `npm run test`.

* `build` - generate a minified build to public folder
* `dev` - start development server
* `test` - run all tests
* `lint` - run linting (eslint + standard config)
* `tdd` - continuously run tests watching for changes

See what each script does by looking at the `scripts` section in [package.json](./package.json).

## Linting

Used `eslint` + [standard config](https://github.com/feross/eslint-config-standard) for linting.

### Inspiration

This boilerplate is heavily inspired by [cesarandreu/web-app](https://github.com/cesarandreu/web-app),
[gaearon/react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate)
and [react-bootstrap/react-bootstrap](https://github.com/react-bootstrap/react-bootstrap)
