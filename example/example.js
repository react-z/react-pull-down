var React = require('react');
var Todo = require('../jsx/todo.jsx');

var TODOS = [
  { id: 0, completed: false, title: 'this is the first todo' },
  { id: 1, completed: false, title: 'this is the second todo' }
];

React.renderComponent(React.createElement(Todo, {todos: TODOS}), document.getElementById("container"));
