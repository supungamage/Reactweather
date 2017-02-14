var React = require('react');
var WheatherForm = require('WheatherForm');
var WheatherMessage = require('WheatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Wheather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;
    this.setState({isLoading: true});

    OpenWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errMessage) {
      that.setState({isLoading: false});
      alert(errMessage);
    });
  },
  render: function() {
    var {location, temp, isLoading} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3>Fetching wheater...</h3>;
      } else if(location && temp) {
        return <WheatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WheatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }


});

module.exports = Wheather;
