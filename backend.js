var request = require('request');
var env = require('env2')('./config.env');

function getTwoRandom() {
  var ranOne = Math.floor(Math.random() * 19) + 1;
  var randTwo = Math.floor(Math.random() * 19) + 1;
  while(ranOne === randTwo){
  randTwo = Math.floor(Math.random() * 19) + 1;
  }
  return { randomOne : ranOne,
           randomTwo : randTwo
         }
};

var getKimInsta = function(callback) {
  request('https://api.instagram.com/v1/users/18428658/media/recent?access_token=' + process.env.APIkey, function(error, response, array) {
      if (error) {
          console.error();
          // send an error to front end
      } else if (!error && response.statusCode == 200) {
      var jsonObject = JSON.parse(array);
      var numbers = getTwoRandom();

      var photo = {
        image1: jsonObject.data[numbers.randomOne].images.standard_resolution.url,
        likes1: jsonObject.data[numbers.randomOne].likes.count,
        image2: jsonObject.data[numbers.randomTwo].images.standard_resolution.url,
        likes2: jsonObject.data[numbers.randomTwo].likes.count
      }
      callback(JSON.stringify(photo));
    }
  });
};

module.exports = getKimInsta;
