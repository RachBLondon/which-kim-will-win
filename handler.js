function(request, response) {
  var url = request.url
  if (url.indexOf('/cat') > -1) {
    // check if the url contains /cat and if so send back a link to a cat image e.g. from a database or an API
    response.end('<img src="http://charts.stocktwits.com/production/original_24310845.jpg?1404265667"/>')
  }
}
