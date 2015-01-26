/** @jsx React.DOM */

var React = require('react');

var TodoList = React.createClass({
  render: function() {
        var todoList = this.props.todos.map(function(todo) {
            return (
                <div>
                    <input 
                      type="checkbox" 
                      checked={todo.completed} 
                      onChange={this.changeSelection.bind(this, todo.id)}/>

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
                  onChange={this.changeAllChecks} />
                
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
    changeSelection: function(id) {
        this.props.onToggleComplete(id);
    },
    changeAllChecks: function() {
        var value = this.refs.allSelector.getDOMNode().checked;
        this.props.onSetAllComplete(value);
    }
});

module.exports = TodoList;