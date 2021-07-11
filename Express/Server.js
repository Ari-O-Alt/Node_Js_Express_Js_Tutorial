// EXPRESS MIDDLEWARE

const express = require("express");
const app = express();

// request =>> middleware => response

// we create a middleware
const logger = (request, response, next) => {
  const method = request.method;
  const url = request.url;
  const time = new Date().getFullYear();

  console.log(method, url, time);

  // we either finish the logic inside the middleware like bellow, sending our response
  // response.send("Testing middleware");

  // or we use the next method that will allow the next method to send the response
  next();
};

app.get("/", logger, (request, response) => {
  response.send("Home page");
});

app.get("/about", (request, response) => {
  response.send("About page");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
