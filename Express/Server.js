const express = require("express");
const app = express();
const { products } = require("./Data.js");

app.get("/", (request, response) => {
  response.json(products);
});

app.listen(3000, () => console.log("The server is listening to port 3000..."));
