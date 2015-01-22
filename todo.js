/** @jsx React.DOM */

var TodoList = React.createClass({displayName: "TodoList",
  complete: function (e) {
    this.props.items[i].done = false;
  },
  render: function() {
    var item = function(item,i) {
      if(item.done){
        return (
          React.createElement("li", null, 
          React.createElement("input", {className: "toggle", type: "checkbox", checked: true, onClick: this.complete.bind(this, i)}), 
          React.createElement("span", null, item.text)
          )
          )
      } else {
        return (
          React.createElement("li", null, 
          React.createElement("input", {className: "toggle", type: "checkbox"}), 
          React.createElement("span", null, item.text)
          )
          )        
      }
    }.bind(this);
    return React.createElement("ul", null, this.props.items.map(item));
  }
});


var TodoApp = React.createClass({displayName: "TodoApp",
  getInitialState: function() {
    return {items: [], text: 'What needs to be done?', done: false};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  onFocus: function(e) {
    this.setState({text: ''});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.state.items.push({text: this.state.text, done: true })
    
    //var nextItems = this.state.items.concat([this.state.text + 'xxx']);
    this.state.text = 'What needs to be done?';

    this.setState({items: this.state.items, text: this.state.text});
  },
  render: function() {
    return (
      React.createElement("div", {className: "todo"}, 
        React.createElement("h3", null, "todos"), 
        React.createElement(TodoList, {items: this.state.items}), 

        React.createElement("form", {onSubmit: this.handleSubmit}, 
          React.createElement("input", {onFocus: this.onFocus, onChange: this.onChange, value: this.state.text}), 
          React.createElement("button", {className: "btn"}, 'Add #' + (this.state.items.length + 1))
        )
      )
    );
  }
});

React.renderComponent(React.createElement(TodoApp, null), document.getElementById("container"));
