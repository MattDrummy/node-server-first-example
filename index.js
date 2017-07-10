var express = require('express');
var server = express();
var port = 5500;
server.get('/', serverResponse);
server.get('/drummy', drummyResponse);
server.get('/about', aboutResponse);
server.get('*', wrongResponse)
server.listen(port);

function serverResponse(request, response) {
  // console.log(request);
  response.send("<h1>It's my very first local server!</h1>");
}

function drummyResponse(request, response) {
  // console.log(request);
  response.send("<h1>My name is Matt, but my friends call me Drummy</h1>");
}

function aboutResponse(request, response) {
  // console.log(request);
  response.send("<h1>I'm so hyped for this!</h1>")
}

function wrongResponse(request, response) {
  console.log(request);
  response.status(404);
  response.send("<h1>Shit dude, this page isn't even here!</h1>")
}
