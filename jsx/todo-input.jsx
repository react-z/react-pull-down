/** @jsx React.DOM */

/**
 * Todo Input
 * A todo input box
**/

var React = require('react');

var TodoInput = React.createClass({
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
      <div className="todo-input">
        
        <h3>todos</h3>

        <input 
          className="todo-text"
          ref="textInput"
          onFocus={this.onFocus} />

          <button 
            onClick={this.submit} 
            className="btn">
            
            Add a new todo
          
          </button>

      </div>
    );
  }
});

module.exports = TodoInput;