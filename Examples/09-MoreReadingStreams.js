// using streams to read files
let http = require("http");
let fs = require("fs");

// READ THE WHOLE FILE AT ONCE - NOT RECOMMENDED
/* http
  .createServer(function (request, response) {
    const text = fs.readFileSync("./BiggerTextFile.txt", "utf8");
    response.end(text);
  })
  .listen(5000); */

// READ THE FILE IN CHUNCKS, USING STREAMS
http
  .createServer(function (request, response) {
    const fileStream = fs.createReadStream("./BiggerTextFile.txt", {
      highWaterMark: 90000,
      encoding: "utf8",
    });
    fileStream.on("open", () => {
      fileStream.pipe(response);
    });
    fileStream.on("error", (error) => {
      response.end(error);
    });
  })
  .listen(5000);
