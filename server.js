var http = require('http');
var fs = require('fs');
var getKimInsta = require('./backend.js')
var env = require('env2')('./config.env');
var index = fs.readFileSync(__dirname + '/index.html');



// set the port for the server
var port = process.env.PORT || 8000;

 function handler(req, res) {
    var url = req.url;
       console.log(url);
    if (url === '/') {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(index.toString());
    } else if (url.indexOf('.') > -1) {
      var ext = url.split('.')[1];
      res.writeHead(200, {'Content-Type': 'text/' + ext})
      res.end(fs.readFileSync(__dirname + url));
    } else if (url.indexOf("/play")> -1) {
       kimsPhotos(req, res);
    }
  };

function kimsPhotos (req, res){
  res.writeHead(200, {"Content-Type":"text/html"});
  getKimInsta(function(photo){
    res.end(photo);
  });
};


http.createServer(handler).listen(port);

console.log('node http server listening on http://localhost:' + port);
