var React = require('react');

var WheatherMessage = ({location, temp}) => {
  return(
    <h3 className="text-center">{location} temprature is {temp}!</h3>
  )
};

module.exports = WheatherMessage;
