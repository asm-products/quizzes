var IconAdd = React.createClass({
  render: function() {
    var size = this.props.size ? this.props.size : 24;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={this.props.classes} onClick={this.props.onClick}>
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </svg>
    )
  }
});

var IconClose = React.createClass({
  render: function() {
    var size = this.props.size ? this.props.size : 24;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={this.props.classes} onClick={this.props.onClick}>
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
    )
  }
});

var IconEdit = React.createClass({
  render: function() {
    var size = this.props.size ? this.props.size : 24;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={this.props.classes} onClick={this.props.onClick}>
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
      </svg>
    )
  }
});
