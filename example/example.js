import Pulr from '../lib/ReactPulr' // 'react-pulr'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

  render () {
    return (
      <div>
        <Pulr />
          <div class="below-content">
              You can push me down!
          </div>
      </div>
    )
  }
}

ReactDOM.render(
  <TestComponent />,
  document.getElementById('root')
)
