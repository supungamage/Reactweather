var React = require('react');

var WheatherMessage = ({location, temp}) => {
  return(
    <p>{location} temprature is {temp}!</p>
  )
};

module.exports = WheatherMessage;
