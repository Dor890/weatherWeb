const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
  const url = "http://api.weatherstack.com/current?access_key=0d07c0aeeabea589531fe9e4eda170c0&query=" + latitude + "," + longitude
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather services')
    }
    else if (body.error) {
      callback('Unable to find the location')
    }
    else {
      callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out, while it feels like " + body.current.feelslike + " degrees")
    }
  })
}

module.exports = forecast