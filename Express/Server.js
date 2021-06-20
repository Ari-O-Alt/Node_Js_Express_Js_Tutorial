const express = require("express"); // import the module
const app = express(); // invoke it
const path = require("path"); // module used for working with paths

// we created a folder called public which will contain all out static files - i copied not cut them so the old examples still work
app.use(express.static("./public"));

app.get("/", (request, response) => {
  response
    .status(200)
    .sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (request, response) => {
  response
    .status(404)
    .send("<h1>The resource you're looking for is not here!</h2>");
});

app.listen(3000, () => {
  // we 're listening to port 3000
  console.log("The server is listening on post 3000...");
});

// app.get
// app.post
// app.put
// app.delete
// app.use
// app.listen
