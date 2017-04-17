var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="textfield" ref="location" placeholder="Enter a location"/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;