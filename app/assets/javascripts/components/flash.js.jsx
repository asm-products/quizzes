var Flash = React.createClass({
  getInitialState: function() {
    return {open: true};
  },

  closeFlash: function(event) {
    this.setState({open: false});
  },

  render: function() {
    var openClass = this.state.open ? " block" : " hide";

    return (
      <div className={"block sm-col-9 md-col-4 mx-auto mb2 p2 bg-white rounded shadow print-hide " + this.props.color + openClass} role="alertdialog">
        {this.props.message}
        <div className="ml2 right" onClick={this.closeFlash}>
          <IconClose classes="fill-grey-3" />
        </div>
      </div>
    )
  }
});
