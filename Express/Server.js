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

// return Hello world no matter the query params
/* app.get("/api/v1/query", (request, response) => {
  console.log(request.query);
  response.send("Hello world!");
}); */

// using query params
// the user can provide values for both, for one or for none
// if the user provides a value for the search param only, we'll get all items which start with that specific letter/ or none
// if the user provides a value for the limit param only, we'll get as many products as the limit param's value
// if the user provides no values for the params, we get all products
app.get("/api/v1/query", (request, response) => {
  console.log(request.query);
  const { search, limit } = request.query; // we destructure the query params from the request.query prop
  let sortedProducts = [...products]; // if no query params are set, all the products are sent back

  // if the user provided a value for the "search" param
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  // if the user provided a value for the "limit" param
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    // response.status(200).send("No product matches your search");
    //       OR
    return response.status(200).json({ success: true, data: [] });
  }
  response.status(200).json(sortedProducts);
});

app.listen(3000, () => {
  console.log("The server is listening to port 3000...");
});
