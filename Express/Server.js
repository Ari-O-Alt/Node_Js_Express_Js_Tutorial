const http = require("http");

// the callback method gets invoked every time the user goes to our server
// it has 2 parameters, request and response (we can call them however we want)
// first paramater refrences the request object
// second parameter refences the response object
const server = http.createServer((request, response) => {
  // every time the user hits the server, the message gets printed to the terminal
  console.log("The user hit the server");
  response.end("Home page"); // what's in the parenthesis will be printed to the page - it can be a string or HTML
});

// we specify on which port to listen for requests
server.listen(3000);
