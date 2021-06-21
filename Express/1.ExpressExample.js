// move this into Server.js before running the code - the nodemon setup is made for Server.js

const express = require("express"); // import the module

const app = express(); // invoke it

app.get("/", (request, response) => {
  // we serve a string is the user tries to access the home page
  console.log("User hit the HOME page!");
  response.status(200).send("This is the home page!");
});

app.get("/about", (request, response) => {
  // we serve a string is the user tries to access the about page
  console.log("User hit the ABOUT page!");
  response.status(200).send("This is the ABOUT page!");
});

app.all("*", (request, response) => {
  // we serve a string is the user tries to access a resource that doesn't exist on the server
  console.log("User hit the HOME page!");
  response
    .status(404)
    .send("<h1>The resource you're looking for is not here!</h2>");
});

app.listen(3000, () => {
  // we 're listening to port 3000
  console.log("The server is listening on post 3000...");
});
