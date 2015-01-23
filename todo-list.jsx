/** @jsx React.DOM */

var TodoList = React.createClass({
  getInitialState: function() {
    return {data: this.props.data};
  },
  componentWillReceiveProps: function(nextProps){
    // TODO: this is not correct, probably state should be just in props
    // also the props are being reset, so if you want to do this, just update with the new prop
    this.setState({ data: this.props.data });
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

