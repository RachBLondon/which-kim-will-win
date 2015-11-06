var request = require('request');
var env = require('env2')('./config.env');
var randomNum = [];

function getTwoRandom(range){
  if(randomNum.length >1){
    randomNum = [];
  }
  var ranOne = Math.floor(Math.random() * 19) + 1;
  var randtwo = Math.floor(Math.random() * 19) + 1;
  while(ranOne === randtwo){
  randtwo = Math.floor(Math.random() * 19) + 1;
  }
  randomNum.push(ranOne, randtwo);
}

var getKimInsta = function(callback) {
  getTwoRandom();
  request('https://api.instagram.com/v1/users/18428658/media/recent?access_token=' + process.env.APIkey, function(error, response, array) {
      if (error) {
          alert('Sorry, there was an error!');
          // send an error to front end
      } else if (!error && response.statusCode == 200) {
      var jsonObject = JSON.parse(array);
      console.log("json length>>>>>",jsonObject.data.length);
      console.log("random number>>>>>>",randomNum);
      var photo = jsonObject.data[randomNum[0]].images.standard_resolution.url + '>' + jsonObject.data[randomNum[0]].likes.count + '>' + jsonObject.data[randomNum[1]].images.standard_resolution.url + '>' + jsonObject.data[randomNum[1]].likes.count;
      callback(photo);

    }
  });
};

module.exports = getKimInsta;
