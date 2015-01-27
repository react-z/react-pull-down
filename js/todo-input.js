/** @jsx React.DOM */

/**
 * Todo Input
 * A todo input box
**/

var React = require('react');

var TodoInput = React.createClass({displayName: "TodoInput",
  onChange: function(e) {
    this.setProps({todoText: e.target.value});
  },
  onFocus: function(e) {
    e.target.value = '';
  },
  submit: function(e) {
    this.props.onaddTodo(
      this.refs.textInput.getDOMNode().value
    );
  },
  render: function() {
    return (
      React.createElement("div", {className: "todo-input"}, 
        
        React.createElement("h3", null, "todos"), 

        React.createElement("input", {
          className: "todo-text", 
          ref: "textInput", 
          onFocus: this.onFocus, 
          onChange: this.onChange, 
          value: this.props.todoText}), 

          React.createElement("button", {
            onClick: this.submit, 
            className: "btn"}, 
            
            "Add a new todo"
          
          )

      )
    );
  }
});

module.exports = TodoInput;