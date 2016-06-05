# react-pulr

react-pulr is a very minimal touch enabled pull down control

It uses hammer.js so works the same on the web as on mobile.

## Installation

`npm install react-pulr --save`

<i>react-pulr comes with pulr as a dependency</i>

## Versions

#### `1.0.0` uses React `^0.13.0`

#### `1.0.1` uses React `^0.15.1`

## Usage

Use browserify or webpack to bundle your main file below to bundle.js

```javascript
var Pulr = require('../js/react-pulr');

React.render( <Pulr />,document.getElementById("container") );

```

- <b>you need some very minimal css</b>

[style.css](https://github.com/StevenIseki/react-pulr/blob/master/example/public/styles.css)

## Development

    npm install
    npm test
    npm run build
    npm start

## License

[MIT](http://isekivacenz.mit-license.org/)
