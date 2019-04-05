import pullDown from './pullDown'
import React, { Component } from 'react'

/**
 * React Pull Down component
 **/
export default class PullDown extends Component {
  componentDidMount() {
    pullDown()
  }

  render() {
    const pullWrapperStyle = {
      width: '100%',
      background: '#fff',
      color: '#555',
      zIndex: '10',
      height: '50px',
      textAlign: 'center',
      transition: 'height',
      boxSizing: 'border-box'
    }

    const svgStyle = {
      position: 'absolute',
      bottom: '10px'
    }

    const svgLineStyle = {
      stroke: '#fff',
      strokeWidth: 5,
      fill: '#fff'
    }

    const pullContentStyle = {
      position: 'relative',
      height: '100%',
      overflow: 'hidden'
    }

    return (
      <div id="pull-down" style={pullWrapperStyle}>
        <div style={pullContentStyle}>
          <svg style={svgStyle} width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </div>
      </div>
    )
  }
}
