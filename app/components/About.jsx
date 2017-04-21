var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
return (
     <div>
        <h1 className='text-center'>About</h1>
        <p>Tools used to build this app:</p>
        <ol>
          <li><Link to='https://facebook.github.io/react/'>React</Link></li>
          <li><Link to='https://nodejs.org/en/'>Node.js</Link></li>
          <li><Link to='https://openweathermap.org/'>Open Weather Map</Link></li>
          <li><Link to='http://foundation.zurb.com/'>Foundation</Link></li>
          <li><Link to='https://github.com/zukethenuke/ReactWeatherApp'>Github</Link></li>
        </ol>
     </div>
    )
}

module.exports = About;   