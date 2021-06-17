const http = require("http");

const { readFileSync } = require("fs");

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

// -------------------------------------------  ADDING MORE DETAILS TO THE RESPONSE WE SEND BACK TO THE BROWSER
// this can be done using more methods
/* const server = http.createServer((request, response) => {
  response.writeHead(200, { "content-type": "text/html" }); // we provide meta data about our response - this is the HEADER of the response
  response.write("Hello, this is some text!"); // we can use this method - write - to add the response's body
  response.end(); // we end the communication with the server
});

server.listen(3000); */

// -------------------------------------------  ADDING MORE DETAILS TO THE REQUEST WE WE SEND BACK TO THE BROWSER

/* const server = http.createServer((request, response) => {
  // console.log(request.method);
  //console.log(request.url);

  const requestedUrl = request.url; // we get the url the user requests

  if (requestedUrl === "/") {
    // if the urls is "/", we return the home page
    response.writeHead(200, { "content-type": "text/html" });
    response.write("<h1>Hello, this is the HOME page!</h1>");
    response.end();
  } else if (requestedUrl === "/about") {
    // if the urls is "/about", we return the about page
    response.writeHead(200, { "content-type": "text/html" });
    response.write("<h1>Hello, this is the ABOUT page!</h1>");
    response.end();
  } else {
    // if the urls is anything else, we return an error message
    response.writeHead(404, { "content-type": "text/html" });
    response.write(
      "<h1>We are sorry, the page you are looking for doesn't exist!</h1>"
    );
    response.end();
  }
});

server.listen(3000); */

// -------------------------------------------  PASSING THE CONTENT OF A HTML DOCUMENT TO THE RESPONSE

// get the content of TestIndex.html

const homePage = readFileSync("./Express/TestIndex.html");
const server = http.createServer((request, response) => {
  // console.log(request.method);
  //console.log(request.url);

  const requestedUrl = request.url; // we get the url the user requests

  if (requestedUrl === "/") {
    response.writeHead(200, { "content-type": "text/html" });
    response.write(homePage);
    response.end();
  } else if (requestedUrl === "/about") {
    response.writeHead(200, { "content-type": "text/html" });
    response.write("<h1>Hello, this is the ABOUT page!</h1>");
    response.end();
  } else {
    response.writeHead(404, { "content-type": "text/html" });
    response.write(
      "<h1>We are sorry, the page you are looking for doesn't exist!</h1>"
    );
    response.end();
  }
});

server.listen(3000);
