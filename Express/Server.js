const { response } = require("express");
const express = require("express");
const app = express();
const { products } = require("./Data.js");

// display the home page
app.get("/", (request, response) => {
  response.send('<h1>Hello world!</h1><a href="/api/products">Products</a>');
});

// display the products page
app.get("/api/products", (request, response) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product; // we destructure the object using same properties names
    return { id, name, image };
  });
  response.json(newProducts);
});

// display the products with ID 1
app.get("/api/products/1", (request, response) => {
  const singleProducts = products.find((product) => {
    return product.id === 1;
  });
  response.json(singleProducts);
});

app.listen(3000, () => {
  console.log("The server is listening to port 3000...");
});
