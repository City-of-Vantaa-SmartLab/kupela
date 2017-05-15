const Tabs = React.createClass({
  displayName: 'Tabs',

  renderContent() {
    return(
      <div className="tabs_content">
        {this.props.children}
      </div>
    );
  }

  render() {
    return(
      <div className="tabs">
        {this.renderContent()}
      </div>
    );
  }
});
