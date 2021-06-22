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

// display the products with ID 1 - this is ineffective if we have many products so we'll use Express routing
/* app.get("/api/products/1", (request, response) => {
  const singleProducts = products.find((product) => {
    return product.id === 1;
  });
  response.json(singleProducts);
}); */

app.get("/api/products/:productId", (request, response) => {
  console.log(request);
  console.log(request.params);
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

app.get("/api/products/:productId/reviews/:reviewId", (request, response) => {
  console.log(request.params);
  response.send("Just a placeholder!");
});

app.listen(3000, () => {
  console.log("The server is listening to port 3000...");
});
