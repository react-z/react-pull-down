/** @jsx React.DOM */

var React = require('react');

/**
 * React Pulr component
**/

var ReactPulr = React.createClass({

  getInitialState: function(){
     return {}
  },

  propTypes: {
    elementId: React.PropTypes.string.isRequired,
    resistance: React.PropTypes.number
  },

  componentDidMount: function() {

    this.pull();
        
  },

  pull: function () {

    var options = {};

    if(this.props.resistance){
      options.resistance = this.props.resistance;
    }

    if (this.props.elementId) {
      options.elementId = this.props.elementId;
    }

    // initialize the pulr
    var pulr = require('pulr');
    pulr(options);

  },
  render: function(){

    return (

    React.createElement("div", {id: "pulr"}, 
      React.createElement("div", {className: "pulr-content"}, "some content... "), 
      React.createElement("svg", {className: "pulr-button", height: "20", width: "40"}, React.createElement("line", {x1: "0", y1: "0", x2: "40", y2: "0"}))
    )

    );
  }

});

module.exports = ReactPulr;