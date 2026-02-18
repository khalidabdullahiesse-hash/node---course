import request from "postman-request";


const weather= (latitude, longitude, callback) => {
  const url =   `http://api.weatherstack.com/current?access_key=0782296248832d7408e063b4f567ed2c&query=${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}`;
  request({ url: url, json: true }, (error, response) => {
    if(error){
      callback('There is not Network services',undefined);
    } else if(response.body.error){
      callback('your search has been dined', undefined);
    } else{
      callback(undefined,{
        temperature: response.body.current.temperature,
        weather_description: response.body.current.weather_descriptions[0]
      });
    }
  });
};


export default weather