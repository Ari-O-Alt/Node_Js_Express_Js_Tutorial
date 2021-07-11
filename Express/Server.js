const { response, request } = require("express");
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

// display the products with ID 1 - this is ineffective if we have many products so we'll use Express routing
/* app.get("/api/products/1", (request, response) => {
  const singleProducts = products.find((product) => {
    return product.id === 1;
  });
  response.json(singleProducts);
}); */

// the colon tells us a route parameter is used
app.get("/api/products/:productId", (request, response) => {
  // console.log("request", request);
  // console.log("params", request.params);
  const { productId } = request.params; // we deconstruct the productId on the params
  const singleProduct = products.find((product) => {
    // if there's a product with the deconstructed product id, we send it back to the user
    return product.id === Number(productId);
  });

  // if no single product is found, send a 404 response
  if (!singleProduct) {
    response
      .status(404)
      .send("<h1>The page you are looking for can't be found!");
  }

  response.json(singleProduct);
});

// Trying to access an URL with two dynamic params
// No matter the value of the dynamic params, we send the same reponse back
// Dummy example, it doesn't return anything since we don't have a setup for these routes
app.get("/api/products/:productId/reviews/:reviewId", (request, response) => {
  // console.log(request.params);
  response.send("Just a placeholder!");
});

app.get("/api/v1/query", (request, response) => {
  console.log(request.query);
  response.send("Hello world!");
});

app.listen(3000, () => {
  console.log("The server is listening to port 3000...");
});
