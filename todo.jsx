/** @jsx React.DOM */

var TodoList = React.createClass({
  getInitialState: function() {
    return {data: this.props.data};
  },
  render: function() {
        var checks = this.state.data.map(function(d) {
            return (
                <div>
                    <input type="checkbox" checked={d.selected} 
                           onChange={this.changeSelection.bind(this, d.id)} />
                    <span>{d.title}</span>                    
                    <br />
                </div>
            );
        }.bind(this));
        return (
              <div>
                <input type="checkbox" ref="allSelector" 
                  onChange={this.changeAllChecks} />
                
                <span className="complete-all">complete all</span>
                <br />
                {checks}
              </div>
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
        var value = this.refs.allSelector.getDOMNode().checked;
        var state = this.state.data.map(function(d) {
            return { id: d.id, selected: value, title: d.title };
        });
        this.setState({ data: state });
    }
});


var TodoApp = React.createClass({
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
      <div className="todo">
        <h3>todos</h3>

        <TodoList data={this.state.data} />

          <input className="todo-text" onFocus={this.onFocus} onChange={this.onChange} value={this.state.todoText} />
          <button onClick={this.handleSubmit} className="btn">
            {'Add #' + (this.state.data.length + 1)}
          </button>

      </div>
    );
  }
});

React.renderComponent(<TodoApp />, document.getElementById("container"));
