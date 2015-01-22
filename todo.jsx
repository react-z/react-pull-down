/** @jsx React.DOM */

var TodoList = React.createClass({
  complete: function (e) {
    this.props.items[i].done = false;
  },
  render: function() {
    var item = function(item,i) {
      if(item.done){
        return (
          <li>
          <input className="toggle" type="checkbox" checked onClick={this.complete.bind(this, i)}  />
          <span>{item.text}</span>
          </li>
          )
      } else {
        return (
          <li>
          <input className="toggle" type="checkbox" />
          <span>{item.text}</span>
          </li>
          )        
      }
    }.bind(this);
    return <ul>{this.props.items.map(item)}</ul>;
  }
});


var TodoApp = React.createClass({
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
      <div className="todo">
        <h3>todos</h3>
        <TodoList items={this.state.items} />

        <form onSubmit={this.handleSubmit}>
          <input onFocus={this.onFocus} onChange={this.onChange} value={this.state.text} />
          <button className="btn">{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});

React.renderComponent(<TodoApp />, document.getElementById("container"));
