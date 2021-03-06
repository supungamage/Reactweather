var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=2f2ade137eff49f6d9584ae22b7a9bd3&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.cod && res.cod != 200 && res.message) {
        throw new Error(res.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.message);
    });
  }
}
