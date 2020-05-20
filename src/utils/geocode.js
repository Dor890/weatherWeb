const request = require('postman-request')

const geocode = (adress, callback) => {
  const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(adress) + ".json?access_token=pk.eyJ1IjoiZG9yODkwIiwiYSI6ImNrYWM5Y3N6MTFkbm4yeHBnbGN4Nmk0Z2oifQ.C_Fw7W7gkqo3E2HMFuW1eg&limit=1"
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services')
    }
    else if (body.features.length == 0) {
      callback('Unable to find location provided')
    }
    else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode