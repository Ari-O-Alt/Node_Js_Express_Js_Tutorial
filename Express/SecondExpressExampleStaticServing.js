// move this into Server.js before running the code - the nodemon setup is made for Server.js

const express = require("express"); // import the module
const app = express(); // invoke it
const path = require("path"); // module used for working with paths

// we created a folder called public which will contain all out static files - I copied not cut them so the old examples still work
// it makes all the resources needed in index.html available, without needing to specify them one by one
// IMPORTANT: we can also move the index.html in the same file and remove the app.get method below
app.use(express.static("./Express/public"));

// serving the home page - we could move it into the static folder also
app.get("/", (request, response) => {
  response
    .status(200)
    .sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

// handling the 404 requests
app.all("*", (request, response) => {
  response
    .status(404)
    .send("<h1>The resource you're looking for is not here!</h2>");
});

app.listen(3000, () => {
  // we 're listening to port 3000
  console.log("The server is listening on post 3000...");
});
