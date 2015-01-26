/** @jsx React.DOM */

var TodoList = React.createClass({displayName: "TodoList",
  render: function() {
        var todoList = this.props.todos.map(function(todo) {
            return (
                React.createElement("div", null, 
                    React.createElement("input", {
                      type: "checkbox", 
                      checked: todo.completed, 
                      onChange: this.changeSelection.bind(this, todo.id)}), 

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
                  onChange: this.changeAllChecks}), 
                
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
    changeSelection: function(id) {
        this.props.onToggleComplete(id);
    },
    changeAllChecks: function() {
        var value = this.refs.allSelector.getDOMNode().checked;
        this.props.onSetAllComplete(value);
    }
});

