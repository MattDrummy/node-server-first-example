var express = require('express');
var server = express();
var drummy = require('./me.json');
var port = 5500;
server.get('/', serverResponse);
server.get('/drummy', drummyResponse);
server.get('/about', aboutResponse);
server.get('*', wrongResponse)
server.listen(port);

function serverResponse(request, response) {
  // console.log(request);
  response.send(`
    <h1>It's my very first local server!</h1>
    <p>Go to localhost:5500/drummy to find out more about me!
  `);
}

function drummyResponse(request, response) {
  // console.log(request);
  response.json(drummy);
}

function aboutResponse(request, response) {
  // console.log(request);
  response.send(`
    <h1>I'm so hyped for this!</h1>
    `)
}

function wrongResponse(request, response) {
  // console.log(request);
  response.status(404);
  response.send(`
    <h1>Shit dude, this page isn't even here!</h1>
    `)
}
