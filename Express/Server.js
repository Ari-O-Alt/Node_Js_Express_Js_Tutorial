// EXPRESS MIDDLEWARE
const express = require("express");
const app = express();
const logger = require("./logger");

// instead of pasing the middleware (logger) to all routs, we cn use the use() method like below
// use() must be placed above all route methods in the code
app.use(logger);

app.get(
  "/",
  /* logger, */ (request, response) => {
    response.send("Home page");
  }
);

app.get(
  "/about",
  /*  logger, */ (request, response) => {
    response.send("About page");
  }
);

app.get(
  "/api/products",
  /*  logger, */ (request, response) => {
    response.send("Products page");
  }
);
app.get(
  "/api/items",
  /* logger, */ (request, response) => {
    response.send("Items page");
  }
);

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
