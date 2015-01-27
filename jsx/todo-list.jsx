/** @jsx React.DOM */

var React = require('react');

/**
 * Todo List
 * A list of todo items
**/

var TodoList = React.createClass({
  render: function() {
    var todoList = this.props.todos.map(function(todo) {
      return (
              <div>
                <input 
                  type="checkbox" 
                  checked={todo.completed} 
                  onChange={this.toggle.bind(this, todo.id)}/>

                <span>{todo.title}</span>                    

                <br />
              </div>
              );
      }.bind(this));
        return (
               <div className="todo-list">
                <input 
                  type="checkbox" 
                  ref="allSelector" 
                  onChange={this.toggleAll} />
                
                <span className="complete-all">
                    complete all
                </span>

                <br />

                <span>
                    {todoList}
                </span>
              </div>
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