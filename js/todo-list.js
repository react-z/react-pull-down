/** @jsx React.DOM */

var React = require('react');

/**
 * Todo List
 * A list of todo items
**/

var TodoList = React.createClass({displayName: "TodoList",
  render: function() {
    var todoList = this.props.todos.map(function(todo) {
      return (
              React.createElement("div", null, 
                React.createElement("input", {
                  type: "checkbox", 
                  checked: todo.completed, 
                  onChange: this.toggle.bind(this, todo.id)}), 

                React.createElement("span", null, todo.title), 

                React.createElement("br", null)
              )
              );
      }.bind(this));
        return (
               React.createElement("div", {className: "todo-list"}, 
                React.createElement("input", {
                  type: "checkbox", 
                  ref: "allSelector", 
                  onChange: this.toggleAll}), 
                
                React.createElement("span", {className: "complete-all"}, 
                    "complete all"
                ), 

                React.createElement("br", null), 

                React.createElement("span", null, 
                    todoList
                )
              )
      );
    },
    /* 
     * Trigger a toggle of completion of the todo list.
    */
    toggle: function(id) {
      this.props.onToggleComplete(id);
    },
    /* 
     * Get the dom node to detect if all todos have been checked,
     * Trigger toggle of all todos as complete/incomplete 
    */
    toggleAll: function() {
      var value = this.refs.allSelector.getDOMNode().checked;
      this.props.onToggleAllComplete(value);
    }
});

module.exports = TodoList;