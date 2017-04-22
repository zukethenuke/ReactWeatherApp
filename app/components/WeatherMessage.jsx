var React = require('react');

var WeatherMessage = (props) => {
  var {temp, location} = props;
    
  return(
      <h4 className='text-center'>It's {temp} in {location}!</h4>
    )
}

module.exports = WeatherMessage;
