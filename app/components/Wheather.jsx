var React = require('react');
var WheatherForm = require('WheatherForm');
var WheatherMessage = require('WheatherMessage');
var ErrorModal = require('ErrorModal');
var OpenWeatherMap = require('OpenWeatherMap');

var Wheather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    OpenWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  render: function() {
    var {location, temp, isLoading, errorMessage} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3 className="text-center">Fetching wheater...</h3>;
      } else if(location && temp) {
        return <WheatherMessage location={location} temp={temp}/>;
      }
    }

    function renderErrorModal() {
      if(typeof errorMessage === 'string') {
        return(
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WheatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderErrorModal()}
      </div>
    )
  }
});

module.exports = Wheather;
