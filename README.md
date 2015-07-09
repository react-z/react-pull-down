# react-pulr

react-pulr uses pulr, a very minimal touch enabled pull down control

just 110 lines of es5 code :) Imagine if we wrote it in es6?

Uses hammer.js so it works the same on the web as on mobile.

## Installation

`npm install react-pulr --save`

<i>react-pulr comes with pulr as a dependency</i>

## Usage

Use browserify or webpack to bundle your main file below to bundle.js

```javascript
var Pulr = require('../js/react-pulr');

React.render( React.createElement(Pulr, null) ,document.getElementById("container") );

```

- <b>you need some very minimal css</b>

[style.css](https://raw.githubusercontent.com/isekivacenz/react-pulr/master/example/styles.css)

## License

[MIT](http://isekivacenz.mit-license.org/)