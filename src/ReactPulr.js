var React = require('react')
var pulr = require('./Pulr')

/**
 * React Pulr component
**/
var ReactPulr = React.createClass({

  getInitialState: function(){
     return {}
  },

  componentDidMount: function() {
    this.pull()
  },

  pull: function () {

    // initialize the pulr
    pulr()

  },
  render: function(){
    return (
      React.createElement("div", {id: "pulr"},
        React.createElement("div", {className: "pulr-content"}, "some content... "),
        React.createElement("svg", {className: "pulr-button", height: "20", width: "40"}, React.createElement("line", {x1: "0", y1: "0", x2: "40", y2: "0"}))
      )
    )
  }

})

module.exports = ReactPulr
