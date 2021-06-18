const express = require("express"); // import the module

const app = express(); // invoke it

app.get("/", (request, response) => {
  // we serve a string is he user tries to access the home page
  console.log("User hit the HOME page!");
  response.send("This is the home page!");
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
