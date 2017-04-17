var React = require('react');

var WeatherMessage = (props) => {
  var {temp, location} = props;
    
  return(
      <h4>It's {temp} in {location}!</h4>
    )
}

module.exports = WeatherMessage;
