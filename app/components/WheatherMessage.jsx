var React = require('react');

var WheatherMessage = ({location, temp}) => {
  return(
    <h3>{location} temprature is {temp}!</h3>
  )
};

module.exports = WheatherMessage;
