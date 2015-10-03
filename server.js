var http = require('http');
var fs = require('fs');
var index = fs.readFileSync(__dirname + '/index.html');


// set the port for the server
var port = process.env.PORT || 8000;

function handler(request, response) {
    //display 'HELLO WORLD' when the user is on the home page
    var url = request.url; //e.g. '/'
    if (url.length === 1) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(index);
  }
}

http.createServer(handler).listen(port);

console.log('node http server listening on http://localhost:' + port);

// function(request, response) {
//   var url = request.url
//   if (url.indexOf('/cat') > -1) {
//     // check if the url contains /cat and if so send back a link to a cat image e.g. from a database or an API
//     response.end('<img src="http://charts.stocktwits.com/production/original_24310845.jpg?1404265667"/>')
//   }
// }
