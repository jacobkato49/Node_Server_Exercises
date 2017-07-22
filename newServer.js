var http = require("http");

var onePORT = 7000;
var twoPORT = 7500;

function handleRequest(request, response){

  response.end("It Works!! Path: " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(onePORT, twoPORT, function(){
  console.log("I am saying something good about you on: http://localhost:%s", onePORT);

  console.log("I am saying something bad about you on: http://localhost:%s", twoPORT);
});
