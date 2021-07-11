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

module.exports = logger;
