/** @jsx React.DOM */

var TodoInput = React.createClass({
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
      <div className="todo-input">
        
        <h3>todos</h3>

        <input 
          className="todo-text"
          ref="textInput"
          onFocus={this.onFocus} 
          onChange={this.onChange} 
          value={this.props.todoText} />

          <button 
            onClick={this.submit} 
            className="btn">
            
            Add a new todo
          
          </button>

      </div>
    );
  }
});

