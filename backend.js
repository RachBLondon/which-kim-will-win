var request = require('request');
var env = require('env2')('./config.env');

console.log( process.env.APIkey);

var getKimInsta = function(callback) {
  request('https://api.instagram.com/v1/users/18428658/media/recent?access_token=' + process.env.APIkey, function(error, response, array) {
      if (error) {
          alert('Sorry, there was an error!');
          // send an error to front end
      } else if (!error && response.statusCode == 200) {
      var jsonObject = JSON.parse(array);
      console.log(jsonObject.data[0].images.standard_resolution.url);
      callback(jsonObject.data[0].images.standard_resolution.url);
    }
  });
};

module.exports = getKimInsta;
