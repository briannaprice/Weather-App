const request = require('request');
const argv = require('yargs').argv;

let apiKey = 'eb9eb65cb209c57a9a3d21db30dc140f';
let city = argv.c || 'omaha';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});