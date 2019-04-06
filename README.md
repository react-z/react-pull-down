## react-z-pull-down

[![npm version](https://badge.fury.io/js/react-z-pull-down.svg)](https://badge.fury.io/js/react-pull-down)

![](https://raw.githubusercontent.com/react-z/react-pull-down/master/example/screenshot.gif)

A simple react pull down component

## Install

``` js
yarn add react-z-pull-down
```

## Use

``` js
import PullDown from 'react-z-pull-down'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'

class TestComponent extends Component {
  render() {
    return (
      <div>
        <PullDown />
        <div>You can pull me down!</div>
      </div>
    )
  }
}

ReactDOM.render(<TestComponent />, document.getElementById('root'))
```

## Development
    yarn
    yarn run dev

## Test
    yarn run test

## Build
    yarn
    yarn run build

## Publish
    npm login
    npm version patch
    git add -A
    git push origin master
    npm publish

## License

[MIT](http://isekivacenz.mit-license.org/)
