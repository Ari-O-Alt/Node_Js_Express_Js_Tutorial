const { response } = require("express");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("<h1>Hello world!</h1>");
});

app.listen(3000, () => {
  console.log("The server is listening to port 3000...");
});
