/** @jsx React.DOM */
var React = require('react');
var TodoInput = require('./todo-input');
var TodoList = require('./todo-list');

var Todo = React.createClass({
	getInitialState: function() {
    return {
      todos: this.props.todos,
      todoText: 'What needs to be done?'
    };
  },
  addTodo: function(text) {
    this.setState({
      todoText: text
    });
    var newTodos = this.state.todos.slice();    
    newTodos.push({id: this.state.todos.length + 1, completed: false, title: text});
    this.setState({
      todos: newTodos
    });
  },
  toggleComplete: function(id) {
    var newTodos = this.state.todos.map(function(todo) {
      return {
        id: todo.id,
        completed: (todo.id === id ? !todo.completed : todo.completed),
        title: todo.title
      };
    });        
    this.setState({
      todos: newTodos
    });
  },
  setAllComplete: function(value) {
    var newTodos = this.state.todos.map(function(todo) {
      return { 
      	id: todo.id, 
      	completed: value, 
      	title: todo.title };
    });
    this.setState({
      todos: newTodos
    });
  },
	render: function() {
		return (
			<div className="todo">
			
				<TodoInput 
				  todoText={this.state.todoText} 
				  onaddTodo={this.addTodo} />

				<TodoList 
				  todos={this.state.todos} 
				  onToggleComplete={this.toggleComplete}
				  onSetAllComplete={this.setAllComplete}
				/>
			</div>
		)
	}
});

module.exports = Todo;