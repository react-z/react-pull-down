import Pulr from '../src/ReactPulr' // 'react-pulr'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'

class TestComponent extends Component {

  render () {
    return (
      <div>
        <Pulr />
          <div>
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
