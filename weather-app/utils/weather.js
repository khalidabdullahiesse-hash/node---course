import request from "postman-request";

const weather = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=0782296248832d7408e063b4f567ed2c&query=${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}`;

  request({ url: url, json: true }, (error, response) => {

    if (error) {
      callback("There is no Network services", undefined);

    } else if (response.body.error) {
      callback("Your search has been denied", undefined);

    } else {
      const temperature = response.body.current.temperature;
      const weather_description = response.body.current.weather_descriptions[0];

      callback(undefined, {
        temperature,
        weather_description
      });
    }

  });
};

export default weather;