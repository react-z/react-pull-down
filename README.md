## react-swipe

[![npm version](https://badge.fury.io/js/react-pull-down.svg)](https://badge.fury.io/js/react-pull-down)

![](https://raw.githubusercontent.com/react-z/react-pull-down/master/example/screenshot.gif)

A simple react pull down component

## Install

``` js
yarn add react-z-pull-down
```

## Use

``` js
import Pulr from 'react-z-pull-down'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'

class TestComponent extends Component {
  render () {
    return (
      <div>
        <Pulr />
          <div class="below-content">
            You can pull me down!
          </div>
      </div>
    )
  }
}

ReactDOM.render(
  <TestComponent />,
  document.getElementById('root')
)
```

## Development
    yarn
    npm run dev

## Build
    yarn
    npm run build
    npm login
    npm version patch
    git add -A
    git push origin master
    npm publish

## License

[MIT](http://isekivacenz.mit-license.org/)
