const http = require("http");

// the callback method gets invoked every time the user goes to our server
// it has 2 parameters, request and response (we can call them however we want)
// first paramater refrences the request object
// second parameter refences the response object
/* const server = http.createServer((request, response) => {
  // every time the user hits the server, the message gets printed to the terminal
  console.log("The user hit the server");
  response.end("Home page"); // what's in the parenthesis will be printed to the page - it can be a string or HTML
});

// we specify on which port to listen for requests
server.listen(3000); */

// -------------------------------------------  ADDING MORE DETAILS ABOUT THE RESPONSE WE SEND BACK TO THE BROWSER
// this can be done using more methods

const server = http.createServer((request, response) => {
  response.writeHead(200, { "content-type": "text/html" }); // we provide meta data about our response - this is the HEADER of the response
  response.write("Hello, this is some text!"); // we can use this method - write - to add the response's body
  response.end(); // we end the communication with the server
});

server.listen(3000);
