var React = require('react');

var About = (props) => {
  return(
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application build on React.</p>
      <p>
        Here are the some of the tools I have used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - was the JavaScript framework
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - was the 3rd party API to get weather by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
