/** @jsx React.DOM */

var TodoList = React.createClass({displayName: "TodoList",
  getInitialState: function() {
    return {data: this.props.data};
  },
  render: function() {
        var checks = this.state.data.map(function(d) {
            return (
                React.createElement("div", null, 

                    React.createElement("input", {type: "checkbox", checked: d.selected, 
                           onChange: this.changeSelection.bind(this, d.id)}), 
                    React.createElement("span", null, d.id), 
                    React.createElement("span", null, d.title), 
                    React.createElement("br", null)
                )
            );
        }.bind(this));
        return (
            React.createElement("form", null, 
                React.createElement("input", {type: "checkbox", ref: "globalSelector", 
                       onChange: this.changeAllChecks}), "complete all", 
                React.createElement("br", null), 
                checks
            )
        );
    },
    changeSelection: function(id) {
        var state = this.state.data.map(function(d) {
            return {
                id: d.id,
                selected: (d.id === id ? !d.selected : d.selected),
                title: d.title
            };
        });

        this.setState({ data: state });

    },
    changeAllChecks: function() {
        var value = this.refs.globalSelector.getDOMNode().checked;
        var state = this.state.data.map(function(d) {
            return { id: d.id, selected: value, title: d.title };
        });

        this.setState({ data: state });
    }
});


var TodoApp = React.createClass({displayName: "TodoApp",
  getInitialState: function() {
    return {
          todoText: 'What needs to be done?',          
          data: [
              { id: 1, selected: false, title: 'this is 1 todo' },
              { id: 2, selected: false, title: 'this is a second todo' }
          ]
      };
  },
  onChange: function(e) {
    this.setState({todoText: e.target.value});
  },
  onFocus: function(e) {
    this.setState({todoText: ''});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.state.data.push({id: this.state.data.length + 1, title: this.state.todoText, selected: false })
    this.state.todoText = 'What needs to be done?';
    this.setState({todoText: this.state.todoText, data: this.state.data});
  },
  render: function() {
    return (
      React.createElement("div", {className: "todo"}, 
        React.createElement("h3", null, "todos"), 

        React.createElement(TodoList, {data: this.state.data}), 

          React.createElement("input", {className: "todo-text", onFocus: this.onFocus, onChange: this.onChange, value: this.state.todoText}), 
          React.createElement("button", {onClick: this.handleSubmit, className: "btn"}, 
            'Add #' + (this.state.data.length + 1)
          )

      )
    );
  }
});

React.renderComponent(React.createElement(TodoApp, null), document.getElementById("container"));
