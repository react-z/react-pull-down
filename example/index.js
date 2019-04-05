import PullDown from '../lib/ReactPullDown' // 'react-z-pull-down'
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
