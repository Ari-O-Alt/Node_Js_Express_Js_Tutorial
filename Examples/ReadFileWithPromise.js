const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Home page");
  }

  if (request.url === "/about") {
    // set some blocking code in this request
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`i = ${i} and j = ${j}`);
      }
    }
    response.end("About page");
  }

  response.end("Error page");
});

server.listen(5000, () => {
  console.log("Server listening on port: 5000...");
});
